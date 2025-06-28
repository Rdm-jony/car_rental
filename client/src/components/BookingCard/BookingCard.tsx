import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Card } from "../ui/card"
import { Label } from "../ui/label"

const BookingCard = () => {
    const [pickUpDate, setPickUpDate] = React.useState<Date>()
    const [returnDate, setRetunDate] = React.useState<Date>()
    return (
        <Card className="p-5">
            <div className="flex justify-between items-center border-b pb-5">
                <p className="text-2xl font-semibold">$130</p>
                <p className="text-muted-foreground ">Per day</p>
            </div>

            <div className="text-muted-foreground font-semibold">
                <Label htmlFor="pickUpDate" className="px-1">
                    Pickup date
                </Label>
                <Popover >
                    <PopoverTrigger asChild className="mt-2">
                        <Button
                            variant="outline"
                            data-empty={!pickUpDate}
                            className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                        >
                            <CalendarIcon />
                            {pickUpDate ? format(pickUpDate, "PPP") : <span>pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={pickUpDate} onSelect={setPickUpDate} />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="text-muted-foreground font-semibold">
                <Label htmlFor="returnDate" className="px-1">
                    Return date
                </Label>
                <Popover >
                    <PopoverTrigger asChild className="mt-2">
                        <Button
                            variant="outline"
                            data-empty={!returnDate}
                            className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                        >
                            <CalendarIcon />
                            {returnDate ? format(returnDate, "PPP") : <span>pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={returnDate} onSelect={setRetunDate} />
                    </PopoverContent>
                </Popover>
            </div>
            <Button className="w-full bg-primary">Book now</Button>
            <p className="text-xs text-center">No credit card required to reserve</p>
        </Card>
    );
};

export default BookingCard;