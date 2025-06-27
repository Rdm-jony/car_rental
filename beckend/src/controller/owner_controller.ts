import { Request, Response } from "express";
import { imagekit } from "../utils/ImgKit";
import { Car } from "../model/car_model";

export const addCar = async (req: Request, res: Response) => {
    try {
        const body = JSON.parse(req.body.carData)
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        }
        const response = await imagekit.upload({
            file: req.file?.buffer,
            fileName: req.file?.originalname
        })
        if (!response.url) {
            return res.status(500).json({
                success: false,
                message: "Image upload failed. No URL returned."
            });
        }

        const newCar = await Car.create({ ...body, owner: req.user?.id, image: response?.url })

        res.status(201).json({ success: true, message: "car added successfully", data: newCar })
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