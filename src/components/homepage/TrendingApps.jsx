import React from 'react';
import AppCard from '../ui/AppCard';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router';
import useApps from '../../hooks/useApps';



const TrendingApps = () => {

    const {apps, loading} = useApps();


    return (
        <div className='w-[90%] md:container mx-auto py-15'>
            <div className='space-y-15
             '>
                <div className='text-center space-y-2'>
                    <h3 className='font-bold text-5xl text-[#001931]'>Trending Apps</h3>
                    <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                {loading ? <HashLoader className='mx-auto' color='#9F62F2' /> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        apps.slice(0, 8).map((app) => {
                            return <AppCard key={app.id} app={app} />
                        })
                    }
                </div>}
                <div className='text-center'>
                    <Link to={"/apps"} >
                        <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-lg'>Show All</button>
                    </Link>
                </div>


            </div>

        </div>
    );
};

export default TrendingApps;