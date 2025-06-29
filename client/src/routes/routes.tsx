import { createBrowserRouter } from "react-router"; // ✅ Use `react-router-dom`, not just `react-router`

import Main from "@/Layout/Main";
import AddCar from "@/pages/AddCar";
import CarDetails from "@/pages/CarDetails";
import Cars from "@/pages/Cars";
import DashboardLayout from "@/Layout/DashboardLayout";
import Home from "@/pages/Home";
import MyBooking from "@/pages/MyBooking";
import Dashboard from "@/pages/Dashboard";
import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignIUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  // ✅ Public Routes
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },

  // ✅ Protected Routes (wrapped with PrivateRoute)
  {
    path: "/",
    element: <PrivateRoute><Main /></PrivateRoute>,
    children: [
      { index: true, element: <Home /> },
      { path: "cars", element: <Cars /> },
      { path: "car-details", element: <CarDetails /> },
      { path: "my-booking", element: <MyBooking /> },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "addcar", element: <AddCar /> },
    ],
  },
]);
