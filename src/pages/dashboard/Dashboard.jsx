import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import useApps from '../../hooks/useApps';

const Dashboard = () => {

    const {installedApps} = useContext(InstallAppsContext);

    const { apps } = useApps();

    const uninstalledAppsLength = apps.length - installedApps.length;

    const data = [
        { name: 'Installed', value: installedApps.length, fill: '#0088FE' },
        { name: 'Uninstalled', value: uninstalledAppsLength, fill: '#FF8042' },
    ];
    return (
        <div className='container mx-auto my-10 mb-50 shadow-lg p-10 rounded-lg border-2 border-gray-200'>
            <h1 className='text-5xl font-bold text-center mb-16'>Installed And Uninstalled Apps</h1>
            <PieChart  style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="fill"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default Dashboard;