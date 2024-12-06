import React from "react";
import { FaFacebookF, FaSquareInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black py-8 mx-0">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
                
                <div>
                    <p className="text-2xl text-white font-bold uppercase mb-4">Fashion</p>
                    <p className="text-gray-500 mb-6">
                        Complete your style with awesome clothes from us.
                    </p>
                    <div className="flex justify-center sm:justify-start gap-4 overflow-hidden">
                        <FaFacebookF className="p-2 text-2xl cursor-pointer bg-lightOrange hover:bg-white hover:text-black rounded-full transition-all duration-300" />
                        <FaSquareInstagram className="p-2 text-2xl cursor-pointer bg-lightOrange hover:bg-white hover:text-black rounded-full transition-all duration-300" />
                        <FaTwitter className="p-2 text-2xl cursor-pointer bg-lightOrange hover:bg-white hover:text-black rounded-full transition-all duration-300" />
                        <FaLinkedinIn className="p-2 text-2xl cursor-pointer bg-lightOrange hover:bg-white hover:text-black rounded-full transition-all duration-300" />
                    </div>
                </div>

                <div className="h-[0.5px] bg-gray-500 mt-8 mb-8"></div>

                <div>
                    <ul className="text-gray-500 space-y-2">
                        <li className="font-bold text-white">Company</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact Us</li>
                        <li className="hover:text-white cursor-pointer">Support</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                    </ul>
                </div>

                <div>
                    <ul className="text-gray-500 space-y-2">
                        <li className="font-bold text-white">Quick Links</li>
                        <li className="hover:text-white cursor-pointer">Share Location</li>
                        <li className="hover:text-white cursor-pointer">Order Tracking</li>
                        <li className="hover:text-white cursor-pointer">Size Guide</li>
                        <li className="hover:text-white cursor-pointer">FAQs</li>
                    </ul>
                </div>

                <div>
                    <ul className="text-gray-500 space-y-2">
                        <li className="font-bold text-white">Legal</li>
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="h-[0.5px] bg-gray-500 mt-8 mb-8"></div>
            <p className="text-center font-poppins text-white">&copy; {new Date().getFullYear()} Fashion. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;