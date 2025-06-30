import mongoose, { model, Schema } from "mongoose";
import { IBooking } from "../interface/booking_interface";

export const bookingSchema = new mongoose.Schema<IBooking>({
    user:{type:Schema.Types.ObjectId,ref:"User",required:[true,'user id is required']},
    car:{type:Schema.Types.ObjectId,ref:"Car",required:[true,'car id is required']},
    pickUpDate:{type:Date,required:[true,'pickUpDate is required']},
    returnDate:{type:Date,required:[true,'returnDate is required']},
    status:{type:String,enum:['confimed','pending'],default:"pending"},
    totalPrice:{type:Number,required:[true,'totalPrice is required']},

},{
    timestamps:true
})

export const Booking=model("Booking",bookingSchema)