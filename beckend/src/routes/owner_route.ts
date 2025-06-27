import express from "express";
import { authMiddleware } from "../middleware/auth_middleware";
import upload from "../middleware/multer_middleware";
import { addCar } from "../controller/owner_controller";

export const ownerRoutes = express.Router()

ownerRoutes.post("/addCar",authMiddleware,upload.single("image"),addCar)