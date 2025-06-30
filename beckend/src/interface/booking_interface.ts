import { Types } from "mongoose";

export interface IBooking{
    user:Types.ObjectId,
    car:Types.ObjectId,
    pickUpDate:Date,
    returnDate:Date,
    totalPrice:number,
    status:'confimed'|'pending',
}