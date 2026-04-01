import React from 'react';
import { FaRegDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div>
            <div className=" min-h-162.5 flex items-center overflow-hidden">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  z-10">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-red-400 text-sm font-medium px-5 py-2 rounded-full">
                            <FaRegDotCircle className='text-[#513BF9]' /> <span className='bg-linear-to-r from-[#513BF9] to-[#9514FA] bg-clip-text text-transparent'> New: AI-Powered Tools Available</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
                            Supercharge Your
                            <br />
                            <span className="text-[#101727]">
                                Digital Workflow
                            </span>
                        </h1>

                        <p className="text-lg text-zinc-700 max-w-lg">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="btn rounded-full bg-linear-to-r from-[#513BF9] to-[#9514FA] text-white">
                                Explore Products

                            </button>
                            <button className="btn rounded-full border border-[#513BF9] bg-linear-to-r from-[#513BF9] to-[#9514FA] bg-clip-text text-transparent">
                                <CiPlay1 className='text-[#513BF9] ' />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img src="/src/assets/banner.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;