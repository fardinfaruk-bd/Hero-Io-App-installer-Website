import React from 'react';

const State = () => {
    return (
        <div className='bg-linear-to-r from-[#9F62F2] to-[#632EE3] text-white'>
            <div className='container mx-auto py-20 text-center space-y-10'>
                <h1 className='text-5xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5'>
                    <div>
                        <p className='text-[#e4d9fa]'>Total Downloads</p>
                        <h3 className='text-[64px] font-extrabold'>29.6M</h3>
                        <p className='text-[#e4d9fa]'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-[#e4d9fa]'>Total Reviews</p>
                        <h3 className='text-[64px] font-extrabold '>906K</h3>
                        <p className='text-[#e4d9fa]'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-[#e4d9fa]'>Active Apps</p>
                        <h3 className='text-[64px] font-extrabold '>132+</h3>
                        <p className='text-[#e4d9fa]'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;