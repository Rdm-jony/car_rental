import { Separator } from '@radix-ui/react-separator';
import { Car, CircleCheckBig, Fuel, LocationEdit, User } from 'lucide-react';
import car from "@/assets/carDetailsImg.webp"

const CarInfo = () => {
    return (
        <div className='space-y-5'>
            <img className="w-full object-cover h-[400px] rounded-2xl" src={car} alt="" />
            <div>
                <h2 className="text-3xl font-bold">Toyota Corolla</h2>
                <p className="text-xl text-muted-foreground font-semibold">Sedan • 2021</p>
            </div>
            <Separator className="my-4 " />
            <div className="grid grid-cols-4 gap-10">
                <div className="font-semibold gap-2 flex p-5 rounded-sm flex-col bg-green-100 items-center">
                    <User />
                    4 Seats
                </div>
                <div className="font-semibold gap-2 flex p-5 rounded-sm flex-col bg-green-100 items-center">
                    <Fuel />
                    Diesel
                </div>
                <div className="font-semibold gap-2 flex p-5 rounded-sm flex-col bg-green-100 items-center">
                    <Car />
                    Automatic
                </div>
                <div className="font-semibold gap-2 flex p-5 rounded-sm flex-col bg-green-100 items-center">
                    <LocationEdit />
                    Los Angeles
                </div>
            </div>
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground">The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.</p>
            <h2 className="text-xl font-semibold">Features</h2>
            <div className="grid grid-cols-2 gap-3">
                <p className="flex items-center gap-2 text-muted-foreground"><CircleCheckBig size={20} /> 360 Camera</p>
                <p className="flex items-center gap-2 text-muted-foreground"><CircleCheckBig size={20} /> GPS</p>
                <p className="flex items-center gap-2 text-muted-foreground"><CircleCheckBig size={20} /> Rear View Mirror</p>
                <p className="flex items-center gap-2 text-muted-foreground"><CircleCheckBig size={20} /> Bluetooth</p>
                <p className="flex items-center gap-2 text-muted-foreground"><CircleCheckBig size={20} /> Heated Seats</p>

            </div>
        </div>
    );
};

export default CarInfo;