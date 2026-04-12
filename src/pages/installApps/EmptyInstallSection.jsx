import React from 'react';
import EmptyAppImg from "../../assets/images/App-Error.png"
import { useNavigate } from 'react-router';
const EmptyInstallSection = () => {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen w-[90%] md:container mx-auto flex justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <img src={EmptyAppImg} alt="" />
                <div>
                    <h2 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h2>
                    <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
                <button onClick={() => navigate(-1)} className='btn bg-linear-to-r from-[#9F62F2] to-[#632EE3] text-white'>Go Back!</button> 
            </div>

        </div>
    );
};

export default EmptyInstallSection;