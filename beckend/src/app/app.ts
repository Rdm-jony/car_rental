import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "../routes/user_route";
import cookieParser from "cookie-parser"

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use("/api/user",userRoutes)

export default app;