import logo from "@/assets/logo.png"
import { Link, useLocation } from "react-router";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
import { selectUser } from "@/Redux/feature/User/userSlice";
import {  useAppSelector } from "@/hooks/use-store";

const Navbar = ({ children }: { children: React.ReactNode }) => {

    const user = useAppSelector(selectUser)
    console.log(user)
    const location = useLocation().pathname

    return (
        <div className={`${location == "/" ? 'bg-green-50' : 'bg-white'} border-b-2 drop-shadow-sm`}>
            <div className="flex justify-between items-center max-w-6xl mx-auto py-5">
                <div className="mr-40">
                    <img src={logo} alt="" className="h-8" />
                </div>
                {children}
                <div className="space-x-10">
                    <Link to="/">Home</Link>
                    <Link to="/cars">Cars</Link>
                    <Link to="/">My Bookings</Link>
                </div>
                <div className="flex w-full max-w-xs items-center gap-2 relative">
                    <Input type="email" placeholder="Search car" className="rounded-full" />
                    <Search className="absolute right-5" size={15} />
                </div>
                <Link to="/">List cars</Link>
                <Button  className="bg-primary">
                    Sign Up
                </Button>

            </div>
            {/* Controlled Modal */}

        </div>
    );

};

export default Navbar;