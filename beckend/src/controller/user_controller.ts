import { User } from "../model/user_model";
import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const body = req.body;
        const user = new User(body);
        await user.hashPassword();
        const token = generateToken({ id: user._id, email: user.email, role: user.role });
        await user.save();
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000,
        })
        return res.status(201).json({
            success: true,
            message: "user create successfully",
            data: user,
        })
    } catch (error: any) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: [
                    {
                        field,
                        message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
                    }
                ]
            });
        }

        // 🔴 Mongoose Validation Error
        if (error.name === "ValidationError") {
            const errors = Object.keys(error.errors).map((field) => ({
                field,
                message: error.errors[field].message
            }));

            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors
            });
        }

        // ⚫ Generic Server Error
        return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
}

export const logInUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(404).json({ success: false, message: "all field are required" })
        }
        const findUser = await User.findOne({ email: email })
        if (!findUser) {
            return res.status(404).json({ success: false, message: "Invaild email or password" })
        }
        const isPassMatch = await findUser.comparePassword(password)
        if (!isPassMatch) {
            return res.status(404).json({ success: false, message: "Invaild email or password" })
        }

        const token = generateToken({ id: findUser._id, email: findUser.email, role: findUser.role })
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000,
        })
        res.status(200).json({ success: true, message: "successfully logged in", data: findUser })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
}

export const getUser = async (req: Request, res: Response):Promise<any> => {
    try {
        const user = await User.findById(req.user?.id).select("-password")
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({success:true,user})
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
}


