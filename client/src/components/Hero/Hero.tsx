import React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import heroCar from "@/assets/hero_car.png"

const Hero = () => {
    const [pickUpDate, setPickUpDate] = React.useState<Date>()
    const [retunDate, setRetunDate] = React.useState<Date>()
    return (
        <div className="bg-green-50 h-screen flex items-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl font-semibold text-center">Luxury cars on Rent</h2>
                <div className="flex my-10 justify-around drop-shadow-xl  bg-white p-5 rounded-full">
                    {/* pickup location */}
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/* pickup date */}
                    <Popover >
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                data-empty={!pickUpDate}
                                className="data-[empty=true]:text-muted-foreground w-[180px] justify-start text-left font-normal"
                            >
                                <CalendarIcon />
                                {pickUpDate ? format(pickUpDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={pickUpDate} onSelect={setPickUpDate} />
                        </PopoverContent>
                    </Popover>
                    {/* return date */}
                    <Popover >
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                data-empty={!retunDate}
                                className="data-[empty=true]:text-muted-foreground w-[180px] justify-start text-left font-normal"
                            >
                                <CalendarIcon />
                                {retunDate ? format(retunDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={retunDate} onSelect={setRetunDate} />
                        </PopoverContent>
                    </Popover>

                    <Button className="bg-primary">
                        Search
                        <Search />
                    </Button>
                </div>

                <img className="" src={heroCar} alt="" />
            </div>
        </div>
    );
};

export default Hero;