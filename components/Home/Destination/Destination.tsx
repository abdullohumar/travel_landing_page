import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='py-20'>
        {/* section heading */}
        <SectionHeading heading='Explore The Popular Destination' description='Find your next destination'/>
        {/* section content */}
        <div className='w-[80%] mx-auto mt-14'>
            {/* slider */}
            <DestinationSlider />
        </div>
    </div>
  )
}

export default Destination