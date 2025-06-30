import { Request, Response } from "express";
import { imagekit } from "../utils/ImgKit";
import { Car } from "../model/car_model";


export const getOwnerCars = async (req: Request, res: Response): Promise<any> => {
    try {
        const data = await Car.find({ owner: req.user?.id })
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
}