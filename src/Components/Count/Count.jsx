import React from 'react';

const Count = () => {
    return (
        <div className='bg-linear-to-r from-[#513BF9] to-[#9514FA]'>
            <div className='container mx-auto m-10'>
                {/* count all card */}
                <div className="flex justify-between items-center w-10/12 mx-auto">

                    {/* card-1 */}
                    <div className="p-16 space-y-4">
                        <h1 className='text-[#FFFFFF] text-6xl font-extrabold'>50K+</h1>
                        <p className='text-2xl text-white font-medium'>Active Users</p>
                    </div>

                    <div className="h-20 border-r border-white mx-3"></div>
                    
                    {/* card-2 */}
                    <div className="p-16 space-y-4">
                        <h1 className='text-[#FFFFFF] text-6xl font-extrabold'>200+</h1>
                        <p className='text-2xl text-white font-medium'>Premium Tools</p>
                    </div>

                    <div className="h-20 border-r border-white mx-3"></div>

                    {/* card-3 */}
                    <div className="p-16 space-y-4 text-center">
                        <h1 className='text-[#FFFFFF] text-6xl font-extrabold'>4.9</h1>
                        <p className='text-2xl text-white font-medium'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;