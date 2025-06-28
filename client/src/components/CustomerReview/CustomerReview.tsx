import Heading from "../Heading/Heading";
import ReviewCard from "../ReviewCard/ReviewCard";

const CustomerReview = () => {
    return (
        <div>
            <Heading title="What Our Customers Say"
                description="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
            />

            <div className="grid grid-cols-3 gap-10">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    );
};

export default CustomerReview;