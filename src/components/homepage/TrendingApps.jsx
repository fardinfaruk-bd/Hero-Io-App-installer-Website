import React, { useEffect, useState } from 'react';
import AppCard from '../ui/AppCard';



const TrendingApps = () => {

    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            console.log(data);
            setApps(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    console.log(apps, "apps");
    console.log(loading, "Loading");


    return (
        <div className='container mx-auto py-15'>
            <div className='space-y-15
             '>
                <div className='text-center space-y-2'>
                    <h3 className='font-bold text-5xl text-[#001931]'>Trending Apps</h3>
                    <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                {loading ? <h2>Loading</h2> : <div className='grid grid-cols-4 gap-5'>
                    {
                    apps.map((app) => {
                        return <AppCard key={app.id} app={app} />
                    })
                }
                </div>}
                
            </div>

        </div>
    );
};

export default TrendingApps;