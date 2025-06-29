import DashboardHeading from "@/components/Heading/DashboardHeading";
import RecentBookingCard from "@/components/RecentBookingCard/RecentBookingCard";
import TotalCountCard from "@/components/TotalCountCard/TotalCountCard";

const Dashboard = () => {
    return (
        <div>
            <DashboardHeading title="Admin Dashboard" description="Monitor overall platform performance including total cars, bookings, revenue, and recent activities" />

            <div className="flex gap-10 mt-10">
                <TotalCountCard />
                <TotalCountCard />
                <TotalCountCard />
                <TotalCountCard />
            </div>
            <div className="flex gap-10 mt-10">
                <div className="border-2 p-5 rounded-xl w-2/3">
                    <h2 className="font-semibold text-xl">Recent Bookings</h2>
                    <p className="text-muted-foreground">Latest customer bookings</p>
                    <div className="space-y-8 mt-5">
                        <RecentBookingCard />
                        <RecentBookingCard />
                        <RecentBookingCard />
                    </div>

                </div>
                <div className="p-5 border-2 space-y-5 h-fit rounded-xl">
                    <h2 className="text-xl font-semibold">Monthly Revenue</h2>
                    <p className="text-muted-foreground">Revenue for current month</p>
                    <p className="text-3xl text-primary font-semibold">$1060</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;