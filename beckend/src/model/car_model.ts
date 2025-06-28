import mongoose, { model, Schema } from "mongoose";
import { ICar } from "../interface/car_interface";

const carSchema = new mongoose.Schema<ICar>({
    owner: {
        type: Schema.Types.ObjectId, ref: "User", required: true
    },
    brand: {
        type: String, required: [true, "brand is required"]
    },
    category: {
        type: String, required: [true, "category is required"]
    },
    description: {
        type: String, required: [true, "description is required"]
    },
    fuelTypes: {
        type: String, required: [true, "fuelTypes is required"]
    },
    image: {
        type: String, required: [true, "image is required"]
    },
    model: {
        type: String, required: [true, "model is required"]
    },
    year: {
        type: Date, required: [true, "year is required"]
    },
    location: {
        type: String, required: [true, "location is required"]
    },
    isAvailable: {
        type: Boolean, default: true
    },
    pricePerDay: {
        type: Number, required: [true, "pricePerDay is required"]
    },
    seatingCapacity: {
        type: Number, required: [true, "seatingCapacity is required"]
    },
    transmission: {
        type: String, required: [true, "transmission is required"]
    },

})

export const Car = model("Car", carSchema)