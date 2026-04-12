import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import DownloadImg from "../../assets/images/icon-downloads.png"
import RatingImg from "../../assets/images/icon-ratings.png"
import ReviewImg from "../../assets/images/icon-review.png"
import { HashLoader } from 'react-spinners';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();

    const {installedApps, setInstalledApps} = useContext(InstallAppsContext);

    const { apps, loading } = useApps();

    const expectedApp = apps.find(app => app.id == id);

    const handleInstall = (expectedApp) => {
        const newInstalled = [...installedApps, expectedApp ];
        setInstalledApps(newInstalled);

    }


    console.log(installedApps, "Installed App");

    if (loading) {
        return <HashLoader className='mx-auto' color='#9F62F2' />;
    }

    return (
        <div className='container mx-auto'>
            <div className='flex gap-10 justify-center items-center'>

                <div className='w-100 p-10 bg-gray-200'>
                    <img src={expectedApp.image} className='rounded-lg' alt="" />
                </div>
                <div className='w-full space-y-5'>
                    <div>
                    <h1 className="font-bold text-4xl">{expectedApp.title}</h1>
                    <p className='text-[#627382]'>Develop By <span className='bg-linear-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent font-bold'>{expectedApp.companyName}</span></p>
                    </div>
                    <hr className='text-gray-300'/>
                    <div className='flex gap-10'>
                        <div className='flex flex-col items-center'>
                            <img src={DownloadImg} className='w-8' alt="" />
                            <p className='text-[#627382]'>Downloads</p>
                            <h2 className='font-bold text-[40px]'>{expectedApp.downloads}</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={RatingImg} className='w-8' alt="" />
                            <p className='text-[#627382]'>Average Ratings</p>
                            <h2 className='font-bold text-[40px]'>{expectedApp.ratingAvg}</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={ReviewImg} className='w-8' alt="" />
                            <p className='text-[#627382]'>Downloads</p>
                            <h2 className='font-bold text-[40px]'>{expectedApp.reviews}</h2>
                        </div>
                    </div>
                    <button className='btn btn-success text-white' onClick={() => handleInstall(expectedApp)}>Install Now({expectedApp.size} MB)</button>
                </div>


            </div>


        </div>
    );
};

export default AppDetails;