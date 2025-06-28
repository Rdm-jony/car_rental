import { Button } from "../ui/button";
import carBanner from "@/assets/carBanner.png"

const CarBanner = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-green-400 flex  p-10 text-white rounded-2xl">
            <div className="space-y-5 w-2/3">
                <h1 className="text-4xl font-semibold">Do You Own a Luxury Car?</h1>
                <p>Monetize your vehicle effortlessly by listing it on CarRental. We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
                <Button className="bg-secondary text-primary">List yours car</Button>
            </div>
            <div className="flex items-end">
                <img src={carBanner} alt="" className="w-2/3 ml-auto" />
            </div>
        </div>
    );
};

export default CarBanner;