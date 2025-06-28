
import Main from "@/Layout/Main";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])