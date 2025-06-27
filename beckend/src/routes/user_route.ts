import express from "express";
import { createUser, getUser, logInUser } from "../controller/user_controller";
import { authMiddleware } from "../middleware/auth_middleware";
export const userRoutes=express.Router()

userRoutes.post("/create",createUser)

userRoutes.post("/login",logInUser)

userRoutes.get("/",authMiddleware,getUser)