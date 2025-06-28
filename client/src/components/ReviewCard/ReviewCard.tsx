import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react";
import { Card } from "../ui/card";
const ReviewCard = () => {
    return (
        <Card className="p-5 shadow-lg">
            <div className="flex gap-5">
                <Avatar className="w-15 h-15">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                    <h3 className="font-semibold text-xl">Emma Rodriguez</h3>
                    <p className="text-muted-foreground font-semibold">Barcelona, Spain</p>
                </div>
            </div>
            <p className="flex"><Star size={20} /> <Star size={20} /> <Star size={20} /> <Star size={20} /></p>
            <p className="text-muted-foreground">
                "I've rented cars from various companies, but the experience with CarRental was exceptional."
            </p>
        </Card>
    );
};

export default ReviewCard;