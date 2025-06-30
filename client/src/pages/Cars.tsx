import CarCard from "@/components/CarCard/CarCard";
import Loader from "@/components/Loader/Loader";
import { Input } from "@/components/ui/input";
import { useGetAllCarsQuery } from "@/Redux/baseAPi";
import { Filter, Search } from "lucide-react";

const Cars = () => {
    const {data:cars,isLoading}=useGetAllCarsQuery()
    if(isLoading){
        return <Loader/>
    }
    return (
        <div>
            <div className="bg-green-50 pb-24 ">
                <div className="text-center pt-20">
                    <
                        h1 className="text-4xl font-semibold my-2">Available Cars</h1>
                    <p className="w-3/5 mx-auto">Browse our selection of premium vehicles available for your next adventure</p>
                </div>
                <div className="w-3/5 h-12 mx-auto mt-5 relative">
                    <Input className="bg-white h-full rounded-full pl-15" placeholder="Search by make,model, or feature"></Input>
                    <Filter className="text-muted-foreground absolute right-5 top-1/2 translate-y-[-50%]" size={20} />
                    <Search className="text-muted-foreground absolute left-5 top-1/2 translate-y-[-50%]" size={20} />
                </div>

            </div>
            <div className="max-w-6xl mx-auto">
                <h3 className="text-muted-foreground font-semibold my-5">Showing 8 Cars</h3>
                <div>
                    <div className="grid grid-cols-3 gap-8">
                        {
                            cars?.map((car, idx) => <CarCard key={idx} car={car} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;