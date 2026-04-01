import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="flex items-center gap-1 font-bold text-xl">
                        <h1 className='text-4xl font-bold bg-linear-to-r from-[#513BF9] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Feature</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <FaCartShopping />
                    <a className="">Login</a>
                    <button className='btn rounded-full bg-linear-to-r from-[#513BF9] to-[#9514FA] text-white'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;