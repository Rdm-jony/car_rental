import express from "express"
import { carBooking, getBookingCar, getExistingBookingDate } from "../controller/booking_controller"
import { authMiddleware } from "../middleware/auth_middleware"

export const bookingRoutes=express.Router()

bookingRoutes.post("/",authMiddleware, carBooking)
bookingRoutes.get("/",authMiddleware, getBookingCar)
bookingRoutes.get("/existingDate/:carId", getExistingBookingDate)