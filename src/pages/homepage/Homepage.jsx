import React from 'react';
import Banner from '../../components/homepage/Banner';
import TrendingApps from '../../components/homepage/TrendingApps';
import State from '../../components/homepage/State';

const Homepage = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Banner />
            <State />
            <TrendingApps />
        </div>
    );
};

export default Homepage;