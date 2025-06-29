import car from "@/assets/carBanner.png"
import { Calendar, LocateFixed } from "lucide-react";

const MyBookingCard = () => {
    return (
        <div className="border-2 p-5 flex justify-between rounded-xl shadow-lg">
            <div className="w-1/2 flex gap-10">
                <div className=" w-1/2 ">
                    <div className="relative p-5">
                        <img className="w-full h-[200px] object-contain" src={car} alt="" />
                        <div className="absolute inset-0 bg-black opacity-15 rounded-xl"></div>
                    </div>
                    <div className="mt-2">
                        <h2 className="font-semibold text-xl">BMW M4 COMPETITION</h2>
                        <p className="text-muted-foreground">2022•SUV • Los Angeles</p>
                    </div>
                </div>
                <div className="space-y-5">
                    <p className="flex gap-5"><span className="bg-gray-100 p-2 rounded-lg">Booking #1</span>
                        <span className="bg-green-100 p-2 rounded-lg text-green-500">confirmed</span></p>
                    <div className="text-muted-foreground flex gap-2 items-start">
                        <Calendar size={20} />
                        <div>
                            <p>Rental Period</p>
                            <p className="text-black font-medium">4/10/2025-4/15/2025</p>
                        </div>
                    </div>
                    <div className="text-muted-foreground flex gap-2 items-start">
                        <LocateFixed size={20} />
                        <div>
                            <p>Pick-up Location</p>
                            <p className="text-black font-medium">Airport Terminal 1</p>
                        </div>
                    </div>
                    <div className="text-muted-foreground flex gap-2 items-start">
                        <Calendar size={20} />
                        <div>
                            <p>Return Location</p>
                            <p className="text-black font-medium">Downtown Office</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-muted-foreground">
                <p>Total Price</p>
                <p className="text-2xl font-semibold text-primary">$475</p>
                <p>Booked on 4/1/2025</p>
            </div>
        </div>
    );
};

export default MyBookingCard;