import React from 'react';
import FooterImg from '../../assets/images/logo.png'
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#001931] text-white'>
            <div className='w-[90%] mx-auto py-10 space-y-5 text-center'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={FooterImg} alt="" className='w-15 h-15' />
                        <h3 className='text-xl font-bold'>HERO.IO</h3>
                    </div>
                    <div>
                        <h3 className='text-xl'>Social Links</h3>
                        <div className='flex gap-5'>
                            <div className='bg-white w-8 h-8 rounded-full text-black flex items-center justify-center'>
                                <FaXTwitter />
                            </div>
                            <div className='bg-white w-8 h-8 rounded-full text-black flex items-center justify-center'>
                                <FaLinkedinIn />
                            </div>
                            <div className='bg-white w-8 h-8 rounded-full text-black flex items-center justify-center'>
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='text-gray-500'/>
                <p className='text-[#627382]'>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;