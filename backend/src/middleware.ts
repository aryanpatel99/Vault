import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: string | object;
}
export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        return res.status(401).json({message:"Unauthorized"})
    }

    const token = authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try {
        if(!process.env.SECRET_KEY){
            throw new Error("SECRET_KEY not found");
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:"Your session has expired. Please sign in again."})
    }
}