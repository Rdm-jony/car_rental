import CarBanner from "@/components/CarBanner/CarBanner";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import FeartuteCars from "@/components/Featured/FeartuteCars";
import Hero from "@/components/Hero/Hero";
import Subscribe from "@/components/Subscribe/Subscribe";

const Home = () => {
    return (
        <div className="space-y-24">
            <Hero></Hero>
            <div className="max-w-6xl mx-auto space-y-24">
                <FeartuteCars />
                <CarBanner />
                <CustomerReview/>
                <Subscribe/>
            </div>
        </div>
    );
};

export default Home;