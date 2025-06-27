import express from "express";
import { createUser, logInUser } from "../controller/user_controller";
export const userRoutes=express.Router()

userRoutes.post("/create",createUser)

userRoutes.post("/login",logInUser)
