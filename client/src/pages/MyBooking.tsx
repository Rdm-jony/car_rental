import MyBookingCard from "@/MyBookingCard/MyBookingCard";

const MyBooking = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="my-10">
                <h1 className="text-3xl font-semibold">My Bookings</h1>
                <p className="text-muted-foreground mt-3">View and manage your all car bookings</p>
            </div>
            <div className="space-y-10">
                <MyBookingCard/>
                <MyBookingCard/>
                <MyBookingCard/>
            </div>
        </div>
    );
};

export default MyBooking;