import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
    return (
        <div className='py-20 flex items-center justify-center flex-col bg-[#13357b]'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* Text content */}
                <div>
                    <h1 className='text-2xl font-semibold text-white'>What our customer are saying us?</h1>
                    <p className='mt-6 text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente fuga accusamus vitae sunt impedit odio nihil tenetur, quo architecto repudiandae.</p>
                    {/* rating */}
                    <div className='flex items-center space-x-2 mt-6'>
                        <div>
                            <p className='text-2xl font-bold text-white'>4.88</p>
                            <p className='mb-2 text-white'>Overall Rating</p>
                            <div className='flex items-center'>
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <div className='overflow-hidden'>
                    <ReviewSlider />
                </div>
            </div>
        </div>
    )
}

export default Review