import mongoose from "mongoose";
import { IUser, UserInstance } from "../interface/user_interface";
import bcrypt from "bcrypt";
import { Model } from "mongoose";

const userSchema=new mongoose.Schema<IUser,Model<IUser>,UserInstance>({
    name:{
        type:String,
        required:[true,"name is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exists"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    role:{
        type:String,
        enum:["owner","user"],
        default:"user",
    },
    image:{
        type:String,
        default:"",
    }
})

userSchema.method("hashPassword",async function(){
    this.password=await bcrypt.hash(this.password,10);
})

userSchema.method("comparePassword",async function (plainPassword:string):Promise<boolean> {
    return await bcrypt.compare(plainPassword,this.password)
})

export const User=mongoose.model("User",userSchema);