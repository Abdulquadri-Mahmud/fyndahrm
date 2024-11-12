import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaAngleRight, FaUserAlt } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdChevronRight, MdOutlineDashboard, MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md'
import { TiDevicePhone } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export default function Monitoring() {
  return (
    <div className='flex h-[100vh]'>

        {/* dashbord navs */}
        <div className="w-[250px] relative p-2 nav px-4">
            <div className="mt-5">
                <img src="FyndahRMLogo.png" alt="" className="max-w-[170px] object-contain" />
            </div>
            <div className="mt-12 flex flex-col gap-6 text-white text-md">
                <div className="bg-white text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineDashboard className='text-2xl'/>
                    <Link to={'/'}>Dashboard</Link>
                </div>
                <div className="text-white hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <FiDatabase className='text-2xl'/>
                    <Link to={'/monitoring'}>Data Monitoring</Link>
                </div>
                <div className="text-white hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <TiDevicePhone className='text-2xl'/>
                    <Link to={'/'}>Connected Device</Link>
                </div>
                <div className="text-white hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineManageAccounts className='text-2xl'/>
                    <Link to={'/'}>Account Activation</Link>
                </div>
                <div className="text-white hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineSettings className='text-2xl'/>
                    <Link to={'/'}>Settings</Link>
                </div>
                <div className="absolute bottom-5 left-4">
                    <button className="flex items-center gap-2"><BiLogOut />Log Out</button>
                </div>
            </div>
        </div>

        <div className="flex-1 overflow-scroll h-[100vh]">
            <div className="w-full p-2 px-6 bg-slate-200 flex gap-3 justify-end items-center">
                <select id="" className='font-medium bg-transparent px-1 outline-none border-0'>
                    <option className='font-medium text-sm' value="AU" style={{backgroundImage: 'url(/autralia.png)'}}>AU</option>
                    <option className='font-medium text-sm' value=""></option>
                </select>
                <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px] rounded-full bord flex justify-center items-center">
                        <FaUserAlt className='color'/>
                    </div>
                    <div className="w-[110px]">
                        <p className="font-medium">UserID iusgs</p>
                        <p className="text-sm truncate">godwinuser@example.com</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center px-6 my-6 flex-wrap gap-3">
                <h1 className='font-medium text-2xl'>Data Monitoring</h1>
                <button className='font-medium text-sm nav text-white px-3 py-2 rounded-md flex items-center gap-2'><IoMdAddCircleOutline className='text-2xl'/>Add new device</button>
            </div>
            <div className="px-6">
                <div className="mt-3">
                    <button className="px-4 nav py-2 rounded-md">Device management</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
