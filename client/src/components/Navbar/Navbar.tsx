import logo from "@/assets/logo.png"
import { Link } from "react-router";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Modal from "../Modal/Modal";
import SignUp from "../SignIUp/SignUp";
import { useState } from "react";

const Navbar = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    return (
        <div className="bg-green-50 border-b-2 drop-shadow-sm">
            <div className="flex justify-between items-center max-w-6xl mx-auto py-5">
                <div className="mr-40">
                    <img src={logo} alt="" className="h-8" />
                </div>
                <div className="space-x-10">
                    <Link to="/">Home</Link>
                    <Link to="/">Cars</Link>
                    <Link to="/">My Bookings</Link>
                </div>
                <div className="flex w-full max-w-xs items-center gap-2 relative">
                    <Input type="email" placeholder="Search car" className="rounded-full" />
                    <Search className="absolute right-5" size={15} />
                </div>
                <Link to="/">List cars</Link>
                <Button className="bg-primary" onClick={() => setIsSignUpOpen(true)}>
                    Sign Up
                </Button>

            </div>
            {/* Controlled Modal */}
            <Modal
                open={isSignUpOpen}
                onOpenChange={setIsSignUpOpen}
                title={
                    <p className="text-2xl">
                        <span className="text-primary">User</span> Sign Up
                    </p>
                }
            >
                <SignUp />
            </Modal>
        </div>
    );

};

export default Navbar;