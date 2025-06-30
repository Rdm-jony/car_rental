import express from "express";
import { authMiddleware } from "../middleware/auth_middleware";
import upload from "../middleware/multer_middleware";
import { getOwnerCars } from "../controller/owner_controller";

export const ownerRoutes = express.Router()

ownerRoutes.get("/cars", authMiddleware, getOwnerCars)