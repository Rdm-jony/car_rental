import { Types } from "mongoose";

export interface ICar {
    owner: Types.ObjectId,
    brand: string,
    model: string,
    image: string,
    year: Date,
    category: string,
    seatingCapacity: number,
    fuelTypes: string,
    transmission: string,
    pricePerDay: Number,
    location: string,
    description: string,
    isAvailable: boolean

} 