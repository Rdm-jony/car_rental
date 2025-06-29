
import Main from "@/Layout/Main";
import AddCar from "@/pages/AddCar";
import CarDetails from "@/pages/CarDetails";
import Cars from "@/pages/Cars";
import DashboardLayout from "@/Layout/DashboardLayout";
import Home from "@/pages/Home";
import MyBooking from "@/pages/MyBooking";
import { createBrowserRouter } from "react-router";
import Dashboard from "@/pages/Dashboard";

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
                path: "/cars",
                Component: Cars
            },
            {
                path: "/car-details",
                Component: CarDetails
            },
            {
                path: "/my-booking",
                Component: MyBooking
            },

        ]
    },
    {
        path: "/dashboard",
        Component: DashboardLayout,
        children:[
            {
                path:"",
                Component:Dashboard
            },
            {
                path:"addcar",
                Component:AddCar
            }
        ]
    }
])