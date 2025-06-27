import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "../routes/user_route";
import cookieParser from "cookie-parser"
import { ownerRoutes } from "../routes/owner_route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use("/api/user",userRoutes)
app.use("/api/owner",ownerRoutes)

export default app;