import type { RootState } from "@/Redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { differenceInDays } from "date-fns";

interface BookingState {
  pickUpDate: Date | null;
  returnDate: Date | null;
  pricePerDay: number; // passed from car
}

const initialState:BookingState={
    pickUpDate:null,
    returnDate:null,
    pricePerDay:0
}

export const bookingSlice=createSlice({
    name:"booking",
    initialState,
    reducers:{
        setPickUpDate:(state,action:PayloadAction<Date>)=>{
            state.pickUpDate=action.payload
        },
        setReturnDate:(state,action:PayloadAction<Date>)=>{
            state.returnDate=action.payload
        },
        setPricePerDay:(state,action:PayloadAction<number>)=>{
            state.pricePerDay=action.payload
        },
        resetPrice:()=>initialState
    }
})

export const {setPickUpDate,setPricePerDay,setReturnDate,resetPrice}=bookingSlice.actions

export const selectTotalPrice = (state:RootState):number => {
  const { pickUpDate, returnDate, pricePerDay } = state.booking;
  if (!pickUpDate || !returnDate || !pricePerDay) return 0;

  const days = differenceInDays(returnDate, pickUpDate);
  return days > 0 ? days * pricePerDay : 0;
};

export default bookingSlice.reducer