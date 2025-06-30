import Loader from "@/components/Loader/Loader";
import type { IBooking } from "@/Model/car_model";
import MyBookingCard from "@/MyBookingCard/MyBookingCard";
import { useGetBookingCarQuery } from "@/Redux/baseAPi";

const MyBooking = () => {
    const { data: myBookings = [], isLoading } = useGetBookingCarQuery();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="my-10">
                <h1 className="text-3xl font-semibold">My Bookings</h1>
                <p className="text-muted-foreground mt-3">View and manage your all car bookings</p>
            </div>
            <div className="space-y-10">
                {myBookings?.map((booking:IBooking) => (
                    <MyBookingCard key={booking._id} booking={booking} />
                ))}
            </div>
        </div>
    );
};

export default MyBooking;
