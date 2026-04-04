import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { connectDB, ContentModel, LinkModel, UserModel } from "./db.js";
import bycrpt from "bcrypt";
import  { z } from "zod";
import { authMiddleware } from "./middleware.js";
import cors from "cors";
import crypto from "crypto";

const app = express();

app.use(express.json());
app.use(cors());


const signupSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

app.post("/api/v1/signup", async (req, res) => {
  try {
    // validate input using zod
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid input" });
    }
    const { username, password } = req.body;

    // check if user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bycrpt.hash(password, 10);

    await UserModel.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bycrpt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid Credentials"})
    }

    if(!process.env.SECRET_KEY){
        throw new Error("SECRET_KEY not found");
    }

    const token = jwt.sign({ userId:user._id}, process.env.SECRET_KEY, {expiresIn:"7d"})

    res.status(200).json({token});

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/v1/content", authMiddleware,async(req, res) => {
    try {
        const {link, title, tags} = req.body;
        const userId = (req as any).user.userId;
        console.log(userId)

        const content = await ContentModel.create({
            userId,
            link,
            title,
            tags
        })

        return res.status(201).json({message:"Content added successfully", content})

    } catch (error) {
        return res.status(500).json({message:"Error adding content", error})
        
    }
});

app.get("/api/v1/content", authMiddleware,async (req, res) => {
    try{
        const userId = (req as any).user.userId;

        const contents = await ContentModel.find({userId}).sort({createdAt:-1}).populate("userId", "username");
        return res.status(200).json({contents})

    }catch(error){
        return res.status(500).json({message:"Error fetching content", error})
    }
});
app.delete("/api/v1/content/:id", authMiddleware,async(req, res) => {
    try {
        const contentId = req.params.id 
        const userId = (req as any).user.userId;

        await ContentModel.deleteOne({
            _id:contentId,
            userId
        })

        return res.status(200).json({message:"Content deleted successfully"})
    } catch (error) {
        return res.status(500).json({message:"Error deleting content", error})
    }
});

app.post("/api/v1/brain/share", authMiddleware,async (req, res) => {
    try {
        const userId = (req as any).user.userId;
        const isEnabled = req.body.isEnabled
        
        if(typeof isEnabled !== "boolean"){
            return res.status(400).json({message:"isEnabled must be a boolean"})
        }
        
        const existing = await LinkModel.findOne({userId})
        if(isEnabled === false){
            if(existing){
                await LinkModel.deleteOne({userId})
                return res.status(200).json({message:"Share disabled"})
            } else {
                return res.status(200).json({message:"Already disabled"})
            }
        }

        if(existing){
            return res.status(200).json({shareLink:existing.hash})
        }

        const hash = crypto.randomBytes(16).toString("hex");

        await LinkModel.create({
            userId,
            hash
        })

        return res.status(201).json({enabled:true, shareLink:hash})
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }

});

app.get("/api/v1/brain/:shareLink", async(req, res) => {
    try {
        const shareLink = req.params.shareLink;
        if(!shareLink){
            return res.status(400).json({message:"Share link is required"})
        }
        
        const link = await LinkModel.findOne({hash:shareLink})

        if(!link){
            return res.status(404).json({message:"Invalid share link"})
        }

        const contents = await ContentModel.find({userId:link.userId})
        return res.status(200).json({contents})
    } catch (error) {
        return res.status(500).json({message:"Error fetching shared content", error})
    }
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
