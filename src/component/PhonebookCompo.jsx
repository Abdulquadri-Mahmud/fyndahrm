import React, { useContext } from 'react'
import { phoneContext } from '../pages/Phonebook/Phonebook'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function PhonebookCompo() {
  const data = useContext(phoneContext);

  return (
    <div>
      <div className="overflow-auto my-8">
          <table class="w-full">
              <thead className=''>
                  <tr className=''>
                      <th className='px-7 py-2 rounded-tl-md text-start bg-red-600 text-white font-normal text-sm'>S/N</th>
                      <th className='px-7 py-2 bg-red-600 text-start text-white font-normal text-sm'>Name</th>
                      <th className='px-7 py-2 bg-red-600 text-start text-white font-normal text-sm'>Number</th>
                      <th className='px-7 py-2 bg-red-600 text-start text-white font-normal text-sm'>Date Addedd</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      data.length > 0 && data.map((data) => {
                          const { id, number, name, date,
                              
                          } = data;

                          return (
                              <tr key={id}>
                                  <td className='text-sm px-7 text-start md:py-3 py-2'>{id}</td>
                                  <td className='text-sm px-7 text-start md:py-3 py-2'>{name}</td>
                                  <td className='text-sm px-7 text-start md:py-3 py-2 flex items-center gap-2'>{number}</td>
                                  <td className='text-sm px-7 text-start md:py-3 py-2 text-gray-500'>{date}</td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>
      </div>
      <div className="px-6 pb-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
              <FaArrowLeft className='text-gray-600'/>
              <p className='text-sm text-gray-600'>Previous</p>
          </div>

          <div className="flex justify-center items-center gap-2">
              <div className="py-1 px-4 rounded-md bg-slate-200">1</div>
              <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">2</div>
              <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">3</div>
              <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">4</div>
              <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">5</div>
              <div className="py-1 px-4 rounded-md bg-slate-100 hover:bg-slate-200">6</div>
          </div>

          <div className="flex items-center gap-2">
              <FaArrowRight className='text-gray-600'/>
              <p className='text-sm text-gray-600'>Next</p>
          </div>
      </div>
    </div>
  )
}
