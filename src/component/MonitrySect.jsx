import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function MonitrySect() {
  return (
    <div className="flex gap-6 items-center md:justify-start flex-wrap px- my-12">
        <div className="mon_navs relative">
            <Link to={'/monitoring'}>
                <button className="font-medium flex gap-3 items-center color">Calls <span className="w-10 h-6 text-white flex justify-center items-center nav rounded-full">0</span></button>
            </Link>
        </div>
        <div className="mon_navs relative">
            <Link to={'/sms'}>
                <button className="font-medium flex gap-3 items-center">SMS <span className="w-10 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">1</span></button>
            </Link>
        </div>
        <div className="mon_navs relative">
            <Link to={'/phonebook'}>
                <button className="font-medium flex gap-3 items-center">Phone book <span className="w-20 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">2345</span></button>
            </Link>
        </div>
        <div className="mon_navs relative">
            <Link to={'/call_recording'}>
                <button className="font-medium flex gap-3 items-center">Call recording <span className="w-10 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">0</span></button>
            </Link>
        </div>
        <div className="mon_navs relative">
            <Link to={'/browser_management'}>
                <button className="font-medium flex gap-3 items-center">Borwser management</button>
            </Link>
        </div>
        <div className="mon_navs relative">
            <Link to={'/notifications'}>
                <button className="font-medium flex gap-3 items-center">Notification <span className="w-10 h-6 text-black flex justify-center items-center bg-slate-100 rounded-full">0</span></button>
            </Link>
        </div>
        <div className="mon_navs relative">
            <Link to={'/locations'}>
                <button className="font-medium flex gap-3 items-center">Location</button>
            </Link>
        </div>
    </div>
  )
}
