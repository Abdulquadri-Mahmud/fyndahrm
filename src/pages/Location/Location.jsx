import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaAngleRight, FaUserAlt } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { MdChevronRight, MdOutlineDashboard, MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md'
import { TiDevicePhone } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import MonitrySect from '../../component/MonitrySect'
import LocationCOmpo from '../../component/LocationCOmpo'
import Header from '../../component/Header'
import Navs from '../../component/Navs'

export default function Location() {
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
                <div className="mt-3 flex items-center gap-4">
                    <button className="px-4 nav py-3 rounded-md text-white font-medium">Device management</button>
                    <div className="relative">
                        <input type="text" placeholder='Search' className='px-2 py-2 pl-10 border-2 border-gray-200 rounded-md'/>
                        <div className="absolute top-4 left-4">
                            <IoSearch className='text-gray-500 text-xl'/>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 pb-2 flex gap-6 items-center md:justify-start px- my-5 over">
                    <div className="mon_navs relative">
                        <Link to={'/monitoring'}>
                            <span className="font-normal text-sm flex gap-3 items-center">
                                Calls <span className="w-10 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">0</span>
                            </span>
                        </Link>
                    </div>
                    <div className="mon_navs relative">
                        <Link to={'/sms'}>
                            <button className="font-normal text-sm flex gap-3 items-center">SMS <span className="w-10 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">1</span></button>
                        </Link>
                    </div>
                    <div className="mon_navs relative">
                        <Link to={'/phonebook'}>
                            <button className="font-normal text-sm flex gap-3 items-center">Phone book <span className="w-20 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">2345</span></button>
                        </Link>
                    </div>
                    <div className="mon_navs relative">
                        <Link to={'/call_recording'}>
                            <button className="font-normal text-sm flex gap-3 items-center">Call recording <span className="w-10 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">0</span></button>
                        </Link>
                    </div>
                    <div className="mon_navs relative">
                        <Link to={'/browser_management'}>
                            <button className="font-normal text-sm flex gap-3 items-center">Borwser management</button>
                        </Link>
                    </div>
                    <div className="mon_navs relative">
                        <Link to={'/notifications'}>
                            <button className="font-normal text-sm flex gap-3 items-center">Notification <span className="w-10 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">0</span></button>
                        </Link>
                    </div>
                    <div className="mon_navs relative">
                        <Link to={'/locations'}>
                            <button className="font-normal text-sm flex gap-3 items-center">Location</button>
                        </Link>
                    </div>
                </div>

                {/*calls */}
                <LocationCOmpo/>
                
            </div>
        </div>
    </div>
  )
}
