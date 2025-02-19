import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
        {/* 1st search input */}
        <div className='flex items-center space-x-6 '>
            <FaMap className='w-6 h-6 text-blue-500'/>
            <div className='flex flex-col ml-2'>
                <h1 className='text-lg font-medium ml-2 tracker-[1px]'>Destination</h1>
                <input className='rounded-lg p-2 w-full placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='Enter your destination...'/>
            </div>
        </div>
        {/* 2nd search input */}
        <div className='flex items-center space-x-6 '>
            <FaCalendarWeek className='w-6 h-6 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='text-lg font-medium ml-2 tracker-[1px]'>Start Date</h1>
                <input type='date' className='rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500'/>
            </div>
        </div>
        {/* 3rd search input */}
        <div className='flex items-center space-x-6 '>
            <FaCalendarWeek className='w-6 h-6 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='text-lg font-medium ml-2 tracker-[1px]'>End Date</h1>
                <input type='date' className='rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500'/>
            </div>
        </div>
        {/* 4th search input */}
        <div className='flex items-center space-x-6 '>
            <FaUserGroup  className='w-6 h-6 text-blue-500'/>
            <div className='flex flex-col'>
                <h1 className='text-lg font-medium ml-2 tracker-[1px]'>Guest </h1>
                <input type='number' className='rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='1 Guest 1 Room'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBox