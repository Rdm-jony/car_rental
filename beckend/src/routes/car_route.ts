import express from "express";
import { authMiddleware } from "../middleware/auth_middleware";
import upload from "../middleware/multer_middleware";
import { addCar, getAllCars } from "../controller/car_controller";
export const carRoutes=express.Router()

carRoutes.post("/", authMiddleware, upload.single("image"), addCar)
carRoutes.get("/all", authMiddleware, upload.single("image"), getAllCars)
