import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="w-full p-2 px-6 bg-slate-200 flex gap-5 justify-end items-center">
      <select id="" className='font-medium bg-transparent px-1 outline-none border-0'>
        <option className='font-medium text-sm' value="AU" style={{backgroundImage: 'url(/autralia.png)'}}>AU</option>
        <option className='font-medium text-sm' value=""></option>
      </select>
      <div className="flex items-center gap-5">
        <div className="w-[30px] h-[30px] rounded-full bord flex justify-center items-center">
          <FaUserAlt className='color'/>
        </div>
        <div className="w-[110px]">
          <p className="font-medium">UserID iusgs</p>
          <p className="text-sm truncate">godwinuser@example.com</p>
        </div>
      </div>
    </div>
  )
}
