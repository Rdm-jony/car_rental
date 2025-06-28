import FeartuteCars from "@/components/Featured/FeartuteCars";
import Hero from "@/components/Hero/Hero";

const Home = () => {
    return (
        <div className="space-y-24">
            <Hero></Hero>
            <div className="max-w-6xl mx-auto">
                <FeartuteCars />
            </div>
        </div>
    );
};

export default Home;