"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Card } from "../ui/card"
import { BookingSchema, type IBooking, type ICar } from "@/Model/car_model"
import { useEffect } from "react"
import { resetPrice, selectTotalPrice, setPickUpDate, setPricePerDay, setReturnDate } from "@/Redux/feature/Booking/bookingSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/use-store"
import { useCarBookingMutation, type IErrorResponse } from "@/Redux/baseAPi"
import { selectUser } from "@/Redux/feature/User/userSlice"
import { toast } from "sonner"



export function BookingCard({ car }: { car: ICar }) {
    const [carBooking] = useCarBookingMutation()
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)
    const totalPrice = useAppSelector(selectTotalPrice)
    const form = useForm<Pick<IBooking, 'pickUpDate' | 'returnDate'>>({
        resolver: zodResolver(BookingSchema),
        defaultValues:{
            pickUpDate:undefined,
            returnDate:undefined
        }
    })
    const pickUpDate = form.watch("pickUpDate");
    const returnDate = form.watch("returnDate");

    useEffect(() => {
        if (pickUpDate && returnDate) {
            dispatch(setPickUpDate(pickUpDate))
            dispatch(setReturnDate(returnDate))
            dispatch(setPricePerDay(car.pricePerDay))
        }
    }, [dispatch, pickUpDate, returnDate, car.pricePerDay])


    async function onSubmit(data: Pick<IBooking, 'pickUpDate' | 'returnDate'>) {
        try {
            const bookingData: IBooking = {
                ...data,
                user: user?._id ?? "",
                car: car?._id ?? "",
                totalPrice,
            };
            const response = await carBooking(bookingData).unwrap()
            form.reset()
            dispatch(resetPrice())
            toast.success(response.message)
        } catch (error: unknown) {
            const err = error as IErrorResponse;
            toast.error(err.data?.message || 'Something went wrong');
        }
    }

    return (
        <Card className="p-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex justify-between pb-5 border-b-2">
                        <p className="text-3xl font-semibold">${totalPrice}</p>
                        <p className="text-muted-foreground ">Per day/ <span className="font-semibold">${car.pricePerDay}</span></p>
                    </div>
                    <FormField
                        control={form.control}
                        name="pickUpDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Pick Pickup date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    " pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date() || date >= new Date(returnDate)
                                            }
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="returnDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Pick return date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    " pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date <= new Date(pickUpDate) || date < new Date()
                                            }
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </Card>
    )
}
