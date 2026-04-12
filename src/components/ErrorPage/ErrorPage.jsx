import React from 'react';
import errorImage from '../../assets/images/error-404.png'
import { Link, Navigate } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen  flex flex-col justify-center items-center gap-10 text-center'>
            <div>
                <img src={errorImage} alt="" className='w-90 ' />
            </div>

            <div className='space-y-5'>
                <h2 className='text-5xl font-semibold text-[#001931]'>Oops, page not found!</h2>
                <p className='text-[#627382]'>The page you are looking for is not available.</p>
                <Link to={"/"} ><button className='p-2 rounded-lg bg-linear-to-t from-[#9F62F2] to-[#632EE3] text-white px-5'>Go Back!</button></Link>
        </div>
        </div >
    );
};

export default ErrorPage;