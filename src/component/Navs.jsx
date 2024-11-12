import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FiDatabase } from 'react-icons/fi'
import { MdOutlineDashboard, MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md'
import { TiDevicePhone } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export default function Navs() {
  return (
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
            <Link to={'/connected_device'}>Connected Device</Link>
        </div>
        <div className="text-white hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
            <MdOutlineManageAccounts className='text-2xl'/>
            <Link to={'/account_activity'}>Account Activation</Link>
        </div>
        <div className="text-white hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
            <MdOutlineSettings className='text-2xl'/>
            <Link to={'/settings'}>Settings</Link>
        </div>
        <div className="absolute bottom-5 left-4">
            <button className="flex items-center gap-2"><BiLogOut />Log Out</button>
        </div>
    </div>
  )
}
