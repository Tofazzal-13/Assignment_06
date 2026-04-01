import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    
    return (
        <footer className="bg-[#101727]  pt-16 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3 mb-6">

                            <h2 className="text-3xl font-bold tracking-tighter text-white">
                                DigiTools
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-[#FFFFFF] font-semibold mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-[#FFFFFF] font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-[#FFFFFF] font-semibold mb-6 text-lg">Legal</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-[#FFFFFF] font-semibold mb-6 text-lg">Social Links</h3>
                        <ul className="space-y-4 text-zinc-400 flex gap-4">
                            <li className="border rounded-full w-10 h-10 flex items-center justify-center bg-white">
                                <a href="#" className="text-xl text-black">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li className="border rounded-full w-10 h-10  flex items-center justify-center bg-white">
                                <a href="#" className="text-xl text-black">
                                    <RiFacebookBoxFill />
                                </a>
                            </li>
                            <li className="border rounded-full w-10 h-10  flex items-center justify-center bg-white">
                                <a href="#" className="text-xl text-black">
                                    <FaXTwitter />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <a href="#" >
                            Privacy Policy
                        </a>
                        <a href="#" >
                            Terms of Service
                        </a>
                        <a href="#" >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;