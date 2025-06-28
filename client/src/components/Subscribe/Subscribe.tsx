import Heading from "../Heading/Heading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Subscribe = () => {
    return (
        <div>
            <Heading title="Never Miss a Deal!"
                description="Subscribe to get the latest offers, new arrivals, and exclusive discounts"
            />
            <div className="flex mx-auto w-3/5 h-15">
                <Input className="h-full rounded-r-none" type="email" placeholder="Enter your email id" />
                <Button className="h-full rounded-l-none bg-primary text-xl text-white" type="submit" variant="outline">
                    Subscribe
                </Button>
            </div>

        </div>
    );
};

export default Subscribe;