import SearchBox from '@/components/Helper/SearchBox'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      {/* overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
      {/* video */}
      <video className='w-full h-full object-cover' src="/images/hero1.mp4" autoPlay loop muted></video>
      {/* text content */}
      <div className='absolute w-full h-full z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex flex-col items-center justify-center w-full h-full px-3'>

          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[0.7rem] text-center uppercase'>Let&apos;s Enjoy The Nature</h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white mt-2 tracking-[1px] text-center'>Get your tour now and start your adventure</p>

          {/* search box */}
          <SearchBox />
          <Link
            href={'#'}
            className='rounded px-14 md:px-28 -mt-5 py-2.5 overflow-hidden group bg-rose-600  hover:bg-gradient-to-r from-rose-500 to-rose-400 hover:ring-1 hover:ring-offset-1 hover:ring-red-400 transition-all ease-out duration-300 relative'>
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform bg-white opacity-10 translate-x-12 rotate-12 group-hover:-translate-x-40 ease'></span>
            <span className='text-white font-medium relative'>Search</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero