import type { IBooking } from "@/Model/car_model"

type IBookingRange = Pick<IBooking, 'pickUpDate' | 'returnDate'>

export const isDateBooked = (date: Date, existingDates: IBookingRange[]) => {
    const isBooked = existingDates
        ? existingDates.some(range => {
            const start = new Date(range.pickUpDate)
            const end = new Date(range.returnDate)
            return date >= start && date <= end
        })
        : false

    return isBooked
}

export const disablePickUpDate = (date: Date, existingDates: IBookingRange[]): boolean => {
    return isDateBooked(date, existingDates) || date <= new Date()
}

export const disableReturnDate = (pickUpDate: Date, date: Date, existingDates: IBookingRange[]): boolean => {
    return date <= new Date(pickUpDate) || date < new Date() || isDateBooked(date, existingDates)
}