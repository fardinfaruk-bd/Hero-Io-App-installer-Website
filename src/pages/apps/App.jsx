import React from 'react';
import useApps from '../../hooks/useApps';
import { HashLoader } from 'react-spinners';
import AppCard from '../../components/ui/AppCard';

const App = () => {

    const { apps, loading } = useApps();  
    return (

        <div className='container mx-auto py-15'>
            <div className='space-y-15
             '>
                <div className='text-center space-y-2'>
                    <h3 className='font-bold text-5xl text-[#001931]'>Our All Applications</h3>
                    <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                {loading ? <HashLoader className='mx-auto' color='#9F62F2' /> : <div className='grid grid-cols-3 gap-5'>
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

export default App;