import { Bookmark } from "lucide-react";

const RecentBookingCard = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-5">
                <span className="text-primary w-10 h-10  bg-green-50 p-1 rounded-full flex justify-center items-center"><Bookmark size={20} /></span>
                <div>
                    <h3 className="font-semibold">BMW 3 Series</h3>
                    <p className="text-muted-foreground text-sm">4/1/2025</p>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <p className="text-muted-foreground text-xl">$475</p>
                <p className="rounded-full border-2 px-2 flex justify-center items-center font-medium">Confirmed</p>
            </div>
        </div>
    );
};

export default RecentBookingCard;