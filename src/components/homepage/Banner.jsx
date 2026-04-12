import React from 'react';
import HeroImg from '../../assets/images/hero.png'
import PlayStoreImg from '../../assets/images/google-play-store.png'
import AppStoreImg from '../../assets/images/App_Store.png'

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center gap-10 text-center pt-20'>
            <h1 className='font-bold text-7xl text-[#001931]'>We Build <br /> <span className='bg-linear-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex-col flex md:flex-row gap-5">
                <button className='btn text-[20px] font-semibold p-6 flex gap-2 items-center'>
                    <img src={PlayStoreImg} alt="Google Play" className='w-5 '/>
                    Google Play</button>
                <button className='btn text-[20px] font-semibold p-6 flex gap-2 items-center'>
                    <img src={AppStoreImg} alt="App Store" className='w-5 '/>
                    App Store</button>
            </div>
            <img src={HeroImg} alt="" />
        </div>
    );
};

export default Banner;