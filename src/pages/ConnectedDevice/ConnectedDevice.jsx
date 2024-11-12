import React, { useEffect, useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import Header from '../../component/Header'
import Navs from '../../component/Navs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdOutlineDashboard, MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md'
import { FiDatabase } from 'react-icons/fi'
import { TiDevicePhone } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'

export default function ConnectedDevice() {

    const data = [
        {
            id: 1,
            deviceModel: 'infinix2345',
            network: 'MTN',
            battery: '90%',
            wifiConnection: 'Active',
            location: '34 Angola street, Anywhere',
            status: 'view'
        },
        {
            id: 2,
            deviceModel: 'infinix2345',
            network: 'Airtel',
            battery: '90%',
            wifiConnection: 'Inactive',
            location: '34 Angola street, Anywhere',
            status: 'view'
        },
        {
            id: 3,
            deviceModel: 'infinix2345',
            network: 'Glo',
            battery: '90%',
            wifiConnection: 'Active',
            location: '34 Angola street, Anywhere',
            status: 'view'
        },
        {
            id: 4,
            deviceModel: 'infinix2345',
            network: '9mobile',
            battery: '90%',
            wifiConnection: 'Inactive',
            location: '34 Angola street, Anywhere',
            status: 'view'
        },
        {
            id: 5,
            deviceModel: 'infinix2345',
            network: 'MTN',
            battery: '90%',
            wifiConnection: 'Active',
            location: '34 Angola street, Anywhere',
            status: 'view'
        },
        {
            id: 6,
            deviceModel: 'infinix2345',
            network: 'MTN',
            battery: '90%',
            wifiConnection: 'Inactive',
            location: '34 Angola street, Anywhere',
            status: 'view'
        },
        {
            id: 6,
            deviceModel: 'infinix2345',
            network: 'Airtel',
            battery: '90%',
            wifiConnection: 'Active',
            location: '34 Angola street, Anywhere',
            status: 'view'
        },
        {
            id: 7,
            deviceModel: 'infinix2345',
            network: 'Glo',
            battery: '90%',
            wifiConnection: 'Inactive',
            location: '34 Angola street, Anywhere',
            status: 'view'
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
            <div className="mt-12 flex flex-col gap-6 text-white text-md">
                <div className="text-white font-medium flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineDashboard className='text-2xl'/>
                    <Link to={'/'}>Dashboard</Link>
                </div>
                <div className="text-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <FiDatabase className='text-2xl'/>
                    <Link to={'/monitoring'}>Data Monitoring</Link>
                </div>
                <div className="bg-white text-black  font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <TiDevicePhone className='text-2xl'/>
                    <Link to={'/connected_device'}>Connected Device</Link>
                </div>
                <div className="text-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineManageAccounts className='text-2xl'/>
                    <Link to={'/account_activity'}>Account Activation</Link>
                </div>
                <div className="text-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineSettings className='text-2xl'/>
                    <Link to={'/settings'}>Settings</Link>
                </div>
                <div className="absolute bottom-5 left-4">
                    <button className="flex items-center gap-2"><BiLogOut />Log Out</button>
                </div>
            </div>
        </div>

        <div className="flex-1 overflow-y-scroll h-[100vh]">
            <Header/>

            <div className="flex justify-between items-center flex-wrap px-6 my-6 ">
                <div className="flex justify-start items-center flex-wrap gap-3">
                    <h1 className='font-medium text-2xl'>Connected Devices</h1>
                    <div className="nav w-[40px] h-[30px] flex justify-center items-center text-white rounded-md">
                        <p className="font-medium">100</p>
                    </div>
                </div>
                <div className="">
                    <button className='font-medium text-sm nav text-white px-3 py-2 rounded-md flex items-center gap-2'><IoMdAddCircleOutline className='text-2xl'/>Add new device</button>
                </div>
            </div>

            <div className="px-6 flex justify-between items-center gap-3 flex-wrap">
                <div className="relative">
                    <input type="text" placeholder='Search' className='px-2 w-[250px] py-2 pl-10 border-2 border-gray-200 rounded-md'/>
                    <div className="absolute top-4 left-4">
                        <IoSearch className='text-gray-500 text-xl'/>
                    </div>
                </div>
                <div className="">
                    <p className="text-gray-500">Last Synced: <span className="font-medium text-black"> 3 minutes agao</span></p>
                </div>
            </div>
            
            <div className="overflow-auto px-6 my-8">
                <table class="w-full">
                    <thead className=''>
                        <tr className=''>
                            <th className='px-7 py-2 rounded-tl-md text-start bg-red-600 text-white font-medium'>S/N</th>
                            <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Device Model</th>
                            <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Network Carrier</th>
                            <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Battery</th>
                            <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Wifi Connection</th>
                            <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Location</th>
                            <th className='px-7 py-2 rounded-tr-md text-start bg-red-600 text-white font-medium'>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 && data.map((data) => {
                                const { id, deviceModel, network,
                                    battery, wifiConnection, location, status
                                } = data;

                                return (
                                    <tr key={id}>
                                        <td className='text-sm px-7 text-start md:py-4 py-2'>{id}</td>
                                        <td className='text-sm px-7 text-start md:py-4 py-2'>{deviceModel}</td>
                                        <td className='text-sm px-7 text-start md:py-4 py-2'>{network}</td>
                                        <td className='text-sm px-7 text-start md:py-4 py-2'>{battery}</td>
                                        <td className='px-7 md:py-4 py-2'>
                                            <div className={`${wifiConnection === 'Active' ? 'flex items-center justify-center gap-2 bg-green-200 py-1 rounded-full' : 'rounded-full bg-slate-200 py-1 '} text-sm  text-center w-[80px]`}>
                                                {
                                                    wifiConnection === 'Active' && (
                                                        <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                                    )
                                                }
                                                <p> {wifiConnection}</p>
                                            </div>
                                        </td>
                                        <td className='text-sm px-7 text-start md:py-4 py-2'>{location}</td>
                                        <td className='text-sm px-7 text-start md:py-4 py-2'>{status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="px-6 pb-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <FaArrowLeft className='text-gray-600'/>
                    <p className='text-sm text-gray-600'>Previous</p>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <div className="py-1 px-4 rounded-md bg-slate-200">1</div>
                    <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">2</div>
                    <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">3</div>
                    <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">4</div>
                    <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">5</div>
                    <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">6</div>
                </div>

                <div className="flex items-center gap-2">
                    <FaArrowRight className='text-gray-600'/>
                    <p className='text-sm text-gray-600'>Next</p>
                </div>
            </div>
        </div>
    </div>
  )
}
