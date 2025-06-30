import { BookingCard } from "@/components/BookingCard/BookingCard";
import CarInfo from "@/components/CarInfo/CarInfo";
import Loader from "@/components/Loader/Loader";
import { useGetCarDetailsQuery } from "@/Redux/baseAPi";

import { ArrowLeft } from "lucide-react"
import { useParams } from "react-router";



const CarDetails = () => {
    const {carId} = useParams()
    const {data,isLoading} = useGetCarDetailsQuery(carId)
    if(isLoading){
        return <Loader/>
    }
    return (
        <div className="max-w-6xl mx-auto">
            <p className="flex gap-2 text-muted-foreground items-center mb-5 mt-15"><ArrowLeft size={15} />Back to all cars</p>
            <div className="flex gap-10">
                <div className="w-2/3">
                    <CarInfo car={data!} />
                </div>
                <div className="w-1/3 sticky top-10 max-h-screen overflow-y-auto">
                    <BookingCard car={data!} />
                </div>
            </div>
        </div>
    );
};

export default CarDetails;