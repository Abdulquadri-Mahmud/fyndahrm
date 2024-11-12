import React from 'react'
import { BiDollar, BiLogOut } from 'react-icons/bi'
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
import { LuDollarSign } from 'react-icons/lu'

export default function AccountActivation() {
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
                <h1 className='font-medium text-2xl'>Account Activation</h1>
            </div>
            <div className="px-6 md:max-w-[60%] max-w-[97%] mx-auto rounded-md md:p-7 p-3 shadow-md">
                <div className="gradient p-3 rounded-md w-[55px] h-[40px] flex items-center text-white font-medium">
                    <LuDollarSign className='text-3xl'/>
                    <span className="text-2xl">36</span>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-medium">Payment intructions</h2>
                    <p className="text-sm pt-3">To activate yout account and start monitoring Devices,plase take note of the folloieings:</p>
                    <ul className='list-decimal pl-6 my-4 text-sm'>
                        <li className='py-2'>Click "Porceed to payment" to complete your account activation</li>
                        <li className='py-2'>Ensure you use the email on your account to fill in the payment form</li>
                        <li className='py-2'>You will be able to monitor unlimited devices at once</li>
                        <li className='py-2'>You agree to se Fyndah Monitoring only for legitimate reasons</li>
                    </ul>
                </div>
                
                <div className="">
                    <select id="" className='font-medium bg-transparent w-full outline-none px-5 rounded-md border-2 border-gray-200 py-3'>
                        <option className='font-medium text-sm' value="US Dollar" >US Dollar</option>
                        <option className='font-medium text-sm' value=""></option>
                    </select>
                </div>
                <form>
                    <button className='text-white nav mt-5 mb-6 px-5 py-3 rounded-md font-medium'>Proceed to payment</button>
                </form>
            </div>
        </div>
    </div>
  )
}
