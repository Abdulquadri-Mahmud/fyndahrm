import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='flex h-[100vh]'>

      {/* dashbord navs */}
      <div className="w-[200px] p-2 nav">
        <div className="mt-6 w-full flex justify-start items-center gap-2 text-white">
          <div className="w-[40px] h-[40px] bg-white rounded-full">
            <h1 className='text-4xl flex justify-end font-medium font color'>F</h1>
          </div>
          <div className="">
            <h2 className='text-4xl font-medium'>Fyndah</h2>
          </div>
          {/* <img src="FyndahRMLogo.jpg" alt="FyndahRMLogo" className='max-w-[100%]'/> */}
        </div>
        <div className="mt-6 text-white font-medium text-xl">
          <div className="">
            <Link to={'/'}>Dashboard</Link>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="w-full p-2 bg-zinc-200 flex gap-3 justify-end items-center">
          <select id="" className='font-medium bg-transparent px-1'>
            <option className='font-medium text-sm' value="">AU </option>
            <option className='font-medium text-sm' value=""></option>
          </select>
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] rounded-full bord"></div>
            <div className="w-[110px]">
              <p className="font-medium">UserID iusgs</p>
              <p className="text-sm truncate">godwinuser@example.com</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
