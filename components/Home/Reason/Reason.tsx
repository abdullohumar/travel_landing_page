import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ReasonCard from './ReasonCard'

const Reason = () => {
  return (
    <div className='pt-16 pb-24'>
      {/* Section Heading */}
      <SectionHeading heading='Why Choose Us' description='Find your next destination'/>
      <div className='grid w-[80%] mx-auto mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center'>
        {/* Reason Card */}
        <ReasonCard image='/images/c1.svg' title='Best Price Guarantee'/>
        <ReasonCard image='/images/c2.svg' title='Easy and Quick Booking'/>
        <ReasonCard image='/images/c3.svg' title='Customer Support 24/7'/>
      </div>
    </div>
  )
}

export default Reason