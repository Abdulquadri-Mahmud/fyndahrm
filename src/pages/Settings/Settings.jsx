import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaAngleRight, FaUserAlt } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { MdChevronRight, MdOutlineDashboard, MdOutlineMail, MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md'
import { TiDevicePhone } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import MonitrySect from '../../component/MonitrySect'
import Header from '../../component/Header'
import Navs from '../../component/Navs'
import { LuDownloadCloud } from 'react-icons/lu'

export default function Settings() {
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
                <div className="text-white  font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <TiDevicePhone className='text-2xl'/>
                    <Link to={'/connected_device'}>Connected Device</Link>
                </div>
                <div className="text-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineManageAccounts className='text-2xl'/>
                    <Link to={'/account_activity'}>Account Activation</Link>
                </div>
                <div className="text-black bg-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
                    <MdOutlineSettings className='text-2xl'/>
                    <Link to={'/settings'}>Settings</Link>
                </div>
                <div className="absolute bottom-5 left-4">
                    <button className="flex items-center gap-2"><BiLogOut />Log Out</button>
                </div>
            </div>
        </div>

        <div className="flex-1 overflow-scroll h-[100vh] pb-14">
            <Header/>
            <div className="flex justify-between items-center px-6 my-6 flex-wrap gap-3">
                <h1 className='font-medium text-2xl'>Settings</h1>
                <button className='font-medium text-sm nav text-white px-3 py-2 rounded-md flex items-center gap-2'><IoMdAddCircleOutline className='text-2xl'/>Add new device</button>
            </div>
            <form>
                <div className="md:max-w-[60%] max-w-[97%] mt-16 mx-auto flex flex-col items-center  ">
                    <div className="flex justify-center gap-5 w-full">
                        <img src="/img.jpeg" alt="image" className="object-cover w-[60px] h-[60px] rounded-full" />
                        <div className="h-[150px] w-[90%] mx-auto rounded-md border border-gray-300 text-center flex flex-col items-center justify-center gap-6">
                            <LuDownloadCloud className='text-center text-5xl'/>
                            <p className="text-purple-700 font-medium ">Click to upload <span className='text-gray-500'>or drag and drop <br /> SVG, PNG. JPG OR Max 800 X 400</span></p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 border-b border-b-gray-300 pb-5 md:max-w-[60%] max-w-[97%] mx-auto">
                    <h2 className="text-2xl font-medium">Profile info</h2>
                    <p className="text-gray-400 pt-2">Update your personal details here.</p>
                </div>

                <div className="md:max-w-[60%] mx-auto shadow-md rounded-md p-5 mt-5">
                    <div className="grid md:grid-cols-2 grid-cols-1  gap-3">
                        <div className=" my-2 flex flex-col gap-3 font-medium text-[1rem] text-gray-600">
                            <span className="">First name</span>
                            <input type="text" placeholder='Example' className='rounded-md border border-gray-300 px-3 py-3'/>
                        </div>
                        <div className=" my-2 flex flex-col gap-3 font-medium text-[1rem] text-gray-600">
                            <span className="">Last name</span>
                            <input type="text" placeholder='Example' className='rounded-md border border-gray-300 px-3 py-3'/>
                        </div>
                    </div>
                    <div className="relative my-2 flex flex-col gap-3 font-medium text-[1rem] text-gray-600">
                        <span className="">Email</span>
                        <input type="text" placeholder='Example@gmail.com' className='pl-12 rounded-md border border-gray-300 px-3 py-3'/>
                        <div className="absolute top-14 px-4">
                            <MdOutlineMail className='text-2xl'/>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end rounded items-end ">
                        <button className='text-center w-[180px] bord py-3 px-4 font-medium rounded-md text-xl'>Update Profile</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
