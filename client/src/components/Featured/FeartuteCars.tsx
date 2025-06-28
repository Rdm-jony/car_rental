import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import CarCard from "../CarCard/CarCard";

const FeartuteCars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('fake.json').then(res => res.json()).then(data => setCars(data)).catch(er => console.log(er))
    }, [])
    console.log(cars)
    return (
        <div>
            <Heading title="Featured Vehicles" description="Explore our selection of premium vehicles available for your next adventure." />
            <div className="grid grid-cols-3 gap-8">
                {
                    cars?.map((car, idx) => <CarCard key={idx} car={car} />)
                }
            </div>
        </div>
    );
};

export default FeartuteCars;