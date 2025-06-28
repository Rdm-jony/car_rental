import logo from "@/assets/logo.png"
import { Facebook, Github, Instagram, Twitch } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white text-muted-foreground py-10 mt-24 font-medium">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo & About */}
                    <div>
                        <div className="flex gap-2 items-center mb-5">
                            <img src={logo} className="w-10" alt="" />
                            <h3 className="text-black text-xl font-semibold mb-4">CarRent</h3>
                        </div>
                        <p className="text-sm">
                            Your trusted platform to rent affordable and luxury cars, anytime, anywhere.
                        </p>

                        <div className="flex gap-3 mt-5">
                            <Facebook />
                            <Instagram />
                            <Twitch />
                            <Github />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-black font-medium mb-3">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-medium mb-3">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-black font-medium mb-3">Follow Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Facebook</a></li>
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-gray-400 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} CarRent. All rights reserved.
                </div>
            </div>
        </footer>

    );
};

export default Footer;