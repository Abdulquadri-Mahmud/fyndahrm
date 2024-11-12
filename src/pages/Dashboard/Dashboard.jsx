import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaAngleRight, FaUserAlt } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdChevronRight, MdOutlineDashboard, MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md'
import { TiDevicePhone } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Header from '../../component/Header'

export default function Dashboard() {
  return (
    <div className='flex h-[100vh]'>

      {/* dashbord navs */}
      <div className="w-[250px] relative p-2 nav px-4">
        <div className="mt-5">
          <img src="FyndahRMLogo.png" alt="" className="max-w-[170px] object-contain" />
        </div>

        {/* Navs Component */}
        <div className="mt-12 flex flex-col gap-6 text-white text-md">
          <div className="text-black bg-white font-medium flex items-center gap-2 rounded-md py-2 px-2">
              <MdOutlineDashboard className='text-2xl'/>
              <Link to={'/'} className='font-medium'>Dashboard</Link>
          </div>
          <div className="text-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
              <FiDatabase className='text-2xl'/>
              <Link to={'/monitoring'} className='font-medium'>Data Monitoring</Link>
          </div>
          <div className="text-white  font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
              <TiDevicePhone className='text-2xl'/>
              <Link to={'/connected_device'} className='font-medium'>Connected Device</Link>
          </div>
          <div className="text-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
              <MdOutlineManageAccounts className='text-2xl'/>
              <Link to={'/account_activity'} className='font-medium'>Account Activation</Link>
          </div>
          <div className="text-white font-medium hover:bg-white duration-200 hover:text-black flex items-center gap-2 rounded-md py-2 px-2">
              <MdOutlineSettings className='text-2xl'/>
              <Link to={'/settings'} className='font-medium'>Settings</Link>
          </div>
          <div className="absolute bottom-5 left-4">
              <button className="flex items-center gap-2"><BiLogOut />Log Out</button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-scroll h-[100vh]">

        <Header/>

        <div className="flex justify-between items-center px-6 my-6 flex-wrap gap-3">
          <h1 className='font-medium text-2xl'>Dashboard</h1>
          <button className='font-medium text-sm nav text-white px-3 py-2 rounded-md flex items-center gap-2'><IoMdAddCircleOutline className='text-2xl'/>Add new device</button>
        </div>

        <div className="flex justify-between px-6 mt-4">
          
          <div className="md:w-[49%] w-[100%]">
            <div className="border border-gray-200 rounded-md">
              <div className="bg-red-500 p-3 rounded-md text-white flex justify-between items-center">
                <h2 className="font-medium ">Device Information</h2>
                <Link className='text-sm flex items-center font-medium gap'>More <MdChevronRight className='text-xl' /></Link>
              </div>

              <div className="py-2 px-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Device Model: <span className="font-medium text-black">Infinix 2345</span></p>
                  <p className="text-sm text-gray-500">Battery Level: <span className="font-medium text-black">90%</span></p>
                </div>
                <p className="text-sm text-gray-500 py-2">Permanent Location: <span className="font-medium text-black">34 Angola street, Anywhere</span></p>
                <p className="text-sm text-gray-500 py-2">Current Wifi: <span className="font-medium text-black">3No Connection</span></p>
                <p className="text-sm text-gray-500 py-2">Network Carrier: <span className="font-medium text-black">MTN</span></p>
                <p className="text-sm text-gray-500 py-2">Last Synced: <span className="font-medium text-black">3 minutes ago</span></p>
              </div>

            </div>
            {/* Recent calls */}
            <div className="my-4 border border-gray-200 text-white rounded-md">
              <div className="bg-red-500 p-3 rounded-md flex justify-between items-center">
                <h2 className="font-medium ">Recent Calls</h2>
                <Link className='text-sm flex items-center font-medium gap'>More <MdChevronRight className='text-xl' /></Link>
              </div>
              <div className="mt-3 py-2 px-6 flex justify-between items-center">
                <div className=" flex items-center gap-2">
                  <div className="w-[40px] h-[40px] rounded-full bord flex justify-center items-center">
                    <FaUserAlt className='color'/>
                  </div>
                  <div className="">
                    <h3 className='font-medium text-black'>Godwin user</h3>
                    <p className="text-gray-500 text-sm font-medium">+2569853563245</p>
                  </div>
                </div>
                <div className="">
                  <h3 className="font-medium text-black">Nov 08 2024, 4:400pm</h3>
                  <p className="text-sm text-gray-500 py-2">Last for 20 seconds</p>
                </div>
              </div>

              <div className=" py-2 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-[40px] h-[40px] rounded-full bord flex justify-center items-center">
                    <FaUserAlt className='color'/>
                  </div>
                  <div className="">
                    <h3 className='font-medium text-black'>Godwin user</h3>
                    <p className="text-gray-500 text-sm font-medium">+2569853563245</p>
                  </div>
                </div>
                <div className="">
                  <h3 className="font-medium text-black">Nov 08 2024, 4:400pm</h3>
                  <p className="text-sm text-gray-500 py-2">Last for 20 seconds</p>
                </div>
              </div>
            </div>

            <div className="mt-2 border border-gray-200 rounded-md">
              <div className="bg-red-500 p-3 rounded-md text-white flex justify-between items-center">
                <h2 className="font-medium ">Recent SMS</h2>
                <Link className='text-sm flex items-center font-medium gap'>More <MdChevronRight className='text-xl' /></Link>
              </div>

              <div className=" py-2 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-[40px] h-[40px] rounded-full bord flex justify-center items-center">
                    <FaUserAlt className='color'/>
                  </div>
                  <div className="">
                    <h3 className='font-medium'>Godwin user</h3>
                    <p className="text-gray-500 text-sm font-medium">+2569853563245</p>
                  </div>
                </div>
                <div className="">
                  <h3 className="font-medium">Nov 08 2024, 4:400pm</h3>
                  <p className="text-sm text-gray-500 py-2">Device: <span className="font-medium text-black">Infinix 2345</span></p>
                </div>
              </div>
              <div className="mt-7 max-w-[90%] mx-auto ">
                <p className="text-sm">Empowering business with custom mobile app solutions that drive engagement and efficiency</p>
              </div>
            </div>
          </div>

          <div className="md:w-[49%] w-[100%] border border-gray-200 rounded-md">
            <div className="bg-red-500 p-3 rounded-md text-white">
              <h2 className="font-medium ">Last Known Location</h2>
            </div>
            <div className="w-full">
              <iframe style={{width: '100%', height: '100vh'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507352.9368784931!2d3.3226752!3d6.5601536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sng!4v1731371565915!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
