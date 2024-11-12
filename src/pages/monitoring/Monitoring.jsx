import React, { createContext } from 'react'
import { IoSearch } from 'react-icons/io5'
import MonitrySect from '../../component/MonitrySect'
import Calls from '../../component/Calls/Calls'
import Header from '../../component/Header'
import Navs from '../../component/Navs'

export const MonitoringContent = createContext();

export default function Monitoring() {
    const data = [
        {
            id: 1,
            number: '+234903567854',
            type: '2',
            date: 'Nov 11 2024, 2:56:56pm',
            duration: 'Active',
            deviceID: 'Iphone 7',
        },
        {
            id: 2,
            number: '+914903567854',
            type: '4',
            date: 'Nov 21 2024, 2:56:56pm',
            duration: '1 hour 3 minutes 30 seconds',
            deviceID: 'Iphone 7',
        },
        {
            id: 3,
            number: '+14903567854',
            type: '5',
            date: 'Feb 21 2024, 2:56:56pm',
            duration: 'Active',
            deviceID: 'Iphone 7',
        },
        {
            id: 4,
            number: '+24903567854',
            type: '3',
            date: 'Nov 21 2024, 2:56:56pm',
            duration: '1 hour 3 minutes 30 seconds',
            deviceID: 'Iphone 7',
        },
        {
            id: 5,
            number: '+124903567854',
            type: 'MTN',
            date: 'Nov 21 2024, 2:56:56pm',
            duration: 'Active',
            deviceID: 'Iphone 7',
        },
        {
            id: 6,
            number: '+314903567854',
            type: '1',
            date: 'Nov 21 2024, 2:56:56pm',
            duration: '1 hour 3 minutes 30 seconds',
            deviceID: 'Iphone 7',
        },
        {
            id: 6,
            number: '+934903567854',
            type: '2',
            date: 'Nov 21 2024, 2:56:56pm',
            duration: 'Active',
            deviceID: 'Iphone 7',
        },
    ];

  return (
    <div className='flex h-[100vh]'>

        {/* dashbord navs */}
        <div className="w-[250px] relative p-2 nav px-4">
            <div className="mt-5">
                <img src="FyndahRMLogo.png" alt="" className="max-w-[170px] object-contain" />
            </div>
            {/* Navs Component */}
            <Navs/>
        </div>

        <div className="flex-1 overflow-scroll h-[100vh]">
            <Header/>
            
            <div className="flex justify-between items-center px-6 my-6 flex-wrap gap-3">
                <h1 className='font-medium text-2xl'>Data Monitoring</h1>
                <select id="" className='font-medium bg-transparent outline-none px-5 rounded-md bord py-2'>
                    <option className='font-medium text-sm' value="Infinix 2345" style={{backgroundImage: 'url(/autralia.png)'}}>Infinix 2345</option>
                    <option className='font-medium text-sm' value=""></option>
                </select>
            </div>
            <div className="px-6">
                <div className="mt-3 flex items-center flex-wrap gap-4">
                    <button className="px-4 nav py-3 rounded-md text-white font-medium">Device management</button>
                    <div className="relative">
                        <input type="text" placeholder='Search' className='px-2 py-2 pl-10 border-2 border-gray-200 rounded-md'/>
                        <div className="absolute top-4 left-4">
                            <IoSearch className='text-gray-500 text-xl'/>
                        </div>
                    </div>
                </div>

                <MonitrySect />

                <MonitoringContent.Provider value={data}>
                    <Calls data={data}/>
                </MonitoringContent.Provider>

                {/*calls */}
                
            </div>
        </div>
    </div>
  )
}
