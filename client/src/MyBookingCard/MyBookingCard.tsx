import type { IBooking, ICar } from "@/Model/car_model";
import { format } from "date-fns";
import { Calendar, LocateFixed } from "lucide-react";

const MyBookingCard = ({ booking }: { booking: IBooking }) => {
    const { pickUpDate, returnDate, totalPrice, status,createdAt,pickUpLocation,returnLocation } = booking
    const { brand, category, image, location, year } = booking?.car as Pick<ICar, 'brand' | 'category' | 'location' | 'image' | 'year'>
    console.log(booking)
    return (
        <div className="border-2 p-5 flex justify-between rounded-xl shadow-lg">
            <div className="w-1/2 flex gap-10">
                <div className=" w-1/2 ">
                    <div className="relative p-5">
                        <img className="w-full h-[200px] object-contain" src={image instanceof File ? URL.createObjectURL(image) : image} alt="" />
                        <div className="absolute inset-0 bg-black opacity-15 rounded-xl"></div>
                    </div>
                    <div className="mt-2">
                        <h2 className="font-semibold text-xl">{brand}</h2>
                        <p className="text-muted-foreground">{format(new Date(year), "yyyy")}•{category}• {location}</p>
                    </div>
                </div>
                <div className="space-y-5">
                    <p className="flex gap-5"><span className="bg-gray-100 p-2 rounded-lg">Booking #1</span>
                        <span className="bg-green-100 p-2 rounded-lg text-green-500">{status}</span></p>
                    <div className="text-muted-foreground flex gap-2 items-start">
                        <Calendar size={20} />
                        <div>
                            <p>Rental Period</p>
                            <p className="text-black font-medium">{format(new Date(pickUpDate), "dd/MM/yyyy")} - {format(new Date(returnDate), "dd/MM/yyyy")}</p>
                        </div>
                    </div>
                    <div className="text-muted-foreground flex gap-2 items-start">
                        <LocateFixed size={20} />
                        <div>
                            <p>Pick-up Location</p>
                            <p className="text-black font-medium">{pickUpLocation}</p>
                        </div>
                    </div>
                    <div className="text-muted-foreground flex gap-2 items-start">
                        <Calendar size={20} />
                        <div>
                            <p>Return Location</p>
                            <p className="text-black font-medium">{returnLocation}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-muted-foreground">
                <p>Total price</p>
                <p className="text-2xl font-semibold text-primary">${totalPrice}</p>
                <p>Booked on {format(new Date(createdAt!), "dd/MM/yyyy")}</p>
            </div>
        </div>
    );
};

export default MyBookingCard;