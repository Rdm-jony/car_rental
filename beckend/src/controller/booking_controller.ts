import { Request, Response } from "express";
import { User } from "../model/user_model";
import { Booking } from "../model/booking_model";

export const carBooking = async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.user?.id
        const findUser = await User.findById(userId)
        if (!findUser) {
            return res.status(404).json({ success: false, message: "Invaild email or password" })

        }
        const body=req.body
        const data=await Booking.create(body)
        res.status(201).json({success:false,message:"Successfully booked",data})
    } catch (error: any) {
        console.log(error)
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