import React, { useContext } from 'react'
import { MonitoringContent } from '../../pages/monitoring/Monitoring';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Calls() {
  const data = useContext(MonitoringContent);

  return (
    <div>
      <div className="overflow-auto my-8">
          <table class="w-full">
              <thead className=''>
                  <tr className=''>
                      <th className='px-7 py-2 rounded-tl-md text-start bg-red-600 text-white font-medium'>Number</th>
                      <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Type</th>
                      <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Date</th>
                      <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Duration</th>
                      <th className='px-7 py-2 bg-red-600 text-start text-white font-medium'>Device ID</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      data.length > 0 && data.map((data) => {
                          const { id, type, date,
                              duration, deviceID
                          } = data;

                          return (
                              <tr key={id}>
                                  <td className='text-sm px-7 text-start md:py-4 py-2'>{id}</td>
                                  <td className='text-sm px-7 text-start md:py-4 py-2'>{type}</td>
                                  <td className='text-sm px-7 text-start md:py-4 py-2'>{date}</td>
                                  <td className='text-sm px-7 text-start md:py-4 py-2'>{duration}</td>
                                  <td className='px-7 md:py-4 py-2'>{deviceID}</td>
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
