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
import AuhenticateRoute from "./AuhenticateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

export const router = createBrowserRouter([
  // ✅ Public Routes


  // ✅ Protected Routes (wrapped with PrivateRoute)
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "cars", element: <Cars /> },
      { path: "car-details", element: <CarDetails /> },
      { path: "my-booking", element: <MyBooking /> },
      { path: "signIn", element:<AuhenticateRoute> <SignIn /> </AuhenticateRoute>  },
      { path: "signUp", element:<AuhenticateRoute><SignUp /></AuhenticateRoute>  },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminPrivateRoute><DashboardLayout /></AdminPrivateRoute>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "addcar", element: <AddCar /> },
    ],
  },
]);
