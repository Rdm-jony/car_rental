import { Car } from "lucide-react";

const TotalCountCard = () => {
    return (
         <div className="flex gap-10 items-center border-2 p-5 rounded-xl shadow-lg">
            <div>
                <p className="text-muted-foreground font-medium">Total Cars</p>
                <p className="font-semibold text-2xl mt-2">8</p>
            </div>
            <span className="text-primary inline-block bg-green-50 p-1 rounded-full"><Car /></span>
        </div>
    );
};

export default TotalCountCard;