import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: string;
            };
        }
    }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        const decode = verifyToken(token)
        if (!decode) {
            return res.status(401).json({ message: "Not authenticated" });

        }
        req.user = decode as { id: string; email: string; role: string };
        next()

    } catch (error: any) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
}