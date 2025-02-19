import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className='py-20'>
        {/* section heading */}
        <SectionHeading heading='Explore The Popular Hotel' description='Find your next destination'/>
        {/* section content */}
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center'>
            {/* Hotel Card */}
            {hotelsData.map((hotel) => (
                <div key={hotel.id}>
                    <HotelCard hotel={{
                        image: hotel.image,
                        name: hotel.name,
                        location: hotel.location,
                        rating: hotel.rating,
                        reviews: hotel.reviews,
                        price: hotel.price
                    }} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotel