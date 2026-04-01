import React from 'react';

const ThreeSteps = () => {
    return (
        <div className='container mx-auto my-10 md:my-20 space-y-10'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold text-[##101727]'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 p-2 md:p-0 md:grid-cols-3 gap-2 md:gap-4'>
                {/* card 1 */}
                <div className='border rounded-3xl flex justify-center items-center p-20 relative '>
                    <div className="card text-center space-y-2">
                        <div className='flex justify-center'>
                            <div className='border border-gray-300 w-25 h-25 rounded-full flex justify-center items-center'>
                                <img className='w-15' src="/user.png" alt="" />
                            </div>
                        </div>
                        <h4  className='text-2xl font-bold'>Create Account</h4>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='absolute top-4 right-6 border border-gray-300 w-6 h-6 rounded-full flex justify-center items-center bg-linear-to-r from-[#513BF9] to-[#9514FA] '>
                        <p className='text-xs text-white font-bold'>1</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className='border rounded-3xl flex justify-center items-center p-20 relative'>
                    <div className="card text-center space-y-2">

                        <div className='flex justify-center'>
                            <div className='border border-gray-300 w-25 h-25 rounded-full flex justify-center items-center'>
                                <img className='w-15' src="/package.png" alt="" />
                            </div>
                        </div>
                        <h4 className='text-2xl font-bold'>Choose Products</h4>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='absolute top-4 right-6 border border-gray-300 w-6 h-6 rounded-full flex justify-center items-center bg-linear-to-r from-[#513BF9] to-[#9514FA] '>
                        <p className='text-xs text-white font-bold'>2</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className='border rounded-3xl flex justify-center items-center p-20 relative'>
                    <div className="card text-center space-y-2">
                        <div className='flex justify-center'>
                            <div className='flex justify-center'>
                                <div className='border border-gray-300 w-25 h-25 rounded-full flex justify-center items-center'>
                                    <img className='w-15' src="/rocket.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <h4 className='text-2xl font-bold'>Start Creating</h4>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                    <div className='absolute top-4 right-6 border border-gray-300 w-6 h-6 rounded-full flex justify-center items-center bg-linear-to-r from-[#513BF9] to-[#9514FA] '>
                        <p className='text-xs text-white font-bold'>3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeSteps;