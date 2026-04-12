import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        <Link to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm p-4">
            <figure className='bg-gray-100 py-10'>
                <img
                    src={app.image}
                    alt={app.title}
                    className='rounded-md  w-50 h-50' />
            </figure>
            <div className="card-body space-y-5">
                <h2 className="card-title text-xl text-[#001931]">{app.title}</h2>
                <div className="card-actions justify-between">
                    <div className='flex items-center bg-[#F1F5E8] p-2 gap-1 text-[#00D390] rounded-md font-medium'>
                        <MdOutlineFileDownload />
                        <span>{app.downloads}</span>
                    </div>
                    <div className='flex items-center bg-[#FFF0E1] p-2 gap-1 text-[#FF8811] rounded-md font-medium'>
                        <FaStar />
                        <span>{app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;