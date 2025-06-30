import type { ICar } from "@/Model/car_model";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Car, Fuel, LocationEdit, User } from "lucide-react";
import { Link } from "react-router";

const CarCard = ({ car }: { car: ICar }) => {
    return (

        <Link to={`/cars/${car._id}`}>
            <Card className="pt-0">
                <div className="relative h-52">
                    <img src={car.image instanceof File ? URL.createObjectURL(car.image) : car.image} alt="" className="h-full w-full object-contain" />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-sm"></div>
                    <Button className="bg-primary absolute top-5 left-5" size={"sm"}>Available Now</Button>
                    <Button className="bg-black absolute bottom-5 right-5" size={"sm"}><span className="font-semibold text-2xl">${car.pricePerDay}</span> / day</Button>
                </div>

                <CardContent>
                    <h2 className="font-semibold text-xl">{car.brand}</h2>
                    <p className="text-sm font-medium text-muted-foreground">{car.category}*{car.year} </p>
                    <div className="grid grid-cols-2 gap-3 justify-between text-muted-foreground mt-5">
                        <p className="flex gap-2"> <User size={20} /> {car.seatingCapacity} Seats</p>
                        <p className="flex gap-2"> <Car size={20} /> {car.transmission}</p>
                        <p className="flex gap-2"> <Fuel size={20} /> {car.fuelTypes}</p>
                        <p className="flex gap-2"> <LocationEdit size={20} /> {car.location} </p>
                    </div>
                </CardContent>
            </Card>
        </Link>

    );
};

export default CarCard;