import express from "express"
import { carBooking } from "../controller/booking_controller"
import { authMiddleware } from "../middleware/auth_middleware"

export const bookingRoutes=express.Router()

bookingRoutes.post("/",authMiddleware, carBooking)