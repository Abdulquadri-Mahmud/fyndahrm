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
import Header from '../../component/Header'
import Navs from '../../component/Navs'

export default function ConnectedDevice() {
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

            <table class="table-fixed">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Device Model</th>
                        <th>Network Carrier</th>
                        <th>Battery</th>
                        <th>Wifi Connection</th>
                        <th>Location</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
