import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { userRoutes } from "../routes/user_route";
import cookieParser from "cookie-parser"
import { ownerRoutes } from "../routes/owner_route";
import { carRoutes } from "../routes/car_route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(cors({origin:["http://localhost:5173"],credentials:true}))

app.use("/api/user",userRoutes)
app.use("/api/owner",ownerRoutes)
app.use("/api/car",carRoutes)


export default app;