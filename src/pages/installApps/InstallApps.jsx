import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import DownloadImage from '../../assets/images/icon-downloads.png'
import RatingImage from '../../assets/images/icon-ratings.png'
import { toast } from 'react-toastify';

const InstallApps = () => {

    const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

    const handleUninstall = (app) => {
        const newInstalled = installedApps.filter(iApp => iApp.id !== app.id);
        setInstalledApps(newInstalled);
        toast.warning(`${app.title} Uninstalled Successfully`);
    }
    return (
        <div className='container mx-auto p-10 space-y-10'>
            <div className='text-center space-y-3'>
                <h3 className='text-[#001931] text-5xl font-bold'>Your Installed Apps</h3>
                <p className=' text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='space-y-10 mb-10'>
                {
                    installedApps.map((app, index) => {
                        return <div key={index} >
                            <div className=' bg-gray-100 flex justify-between items-center p-5 rounded-lg'>
                                <div className="flex items-center gap-5">
                                    <figure className='bg-white p-3 rounded-lg'>
                                        <img src={app.image} alt="" className='w-30 rounded-lg' />
                                    </figure>
                                    <div className='space-y-5'>
                                        <h3 className='text-xl font-medium'>{app.title}</h3>
                                        <div className='flex gap-10'>
                                            <div className='flex items-center gap-2 text-[#00D390]'>
                                                <img src={DownloadImage} className='w-4 h-4' alt="" />
                                                <span>{app.downloads}</span>
                                            </div>
                                            <div className='flex items-center gap-2 text-[#FF8811]'>
                                                <img src={RatingImage} className='w-4 h-4' alt="" />
                                                <span>{app.ratingAvg}</span>
                                            </div>
                                            <div className=' text-[#627382]'>
                                                <p>{app.size} MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-error text-white' onClick={() => handleUninstall(app)}>Uninstall</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default InstallApps;