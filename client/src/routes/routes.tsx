
import Main from "@/Layout/Main";
import CarDetails from "@/pages/CarDetails";
import Cars from "@/pages/Cars";
import Home from "@/pages/Home";
import MyBooking from "@/pages/MyBooking";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            {
                index: true,
                Component: Home,

            },
            {
                path:"/cars",
                Component:Cars
            },
            {
                path:"/car-details",
                Component:CarDetails
            },
            {
                path:"/my-booking",
                Component:MyBooking
            }
        ]
    }
])