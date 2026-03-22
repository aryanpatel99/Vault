import mongoose, { model,Schema } from "mongoose"


export async function connectDB() {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL not found");
        }

        await mongoose.connect(process.env.DATABASE_URL+"/secondbrain");
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error("Mongo connection error:", err);
        process.exit(1);
    }
}

const UserSchema= new Schema({
    username:{type:String,required:true, unique:true},
    password:{type:String,required:true},
})

export const UserModel = model("User",UserSchema)


const ContentSchema = new Schema({
    userId:{type:Schema.Types.ObjectId, ref:"User", required:true},
    title:{type:String, required:true},
    link:{type:String, required:true},
    tags:[{type:String}]
},{timestamps:true})

export const ContentModel = model("Content",ContentSchema)


const LinkSchema = new Schema({
    hash:{type:String, required:true, unique:true},
    userId:{type:Schema.Types.ObjectId, ref:"User", required:true},
})

export const LinkModel = model("Link", LinkSchema)