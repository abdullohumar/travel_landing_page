'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
const ReviewSlider = () => {
  return (
    <div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
        >
            {reviewData.map((review) => (
                <SwiperSlide key={review.id} className='bg-white rounded-3xl block'>
                    <div className='w-[80%] mx-auto mt-16'>
                        <p className='text-xs sm:text-sm md:text-base font-semibold'>{review.review}</p>
                        <div className='flex items-center mt-4'>
                            <FaStar className='w-3 h-3 md:w-6 md:h-6 text-yellow-600'/>
                            <FaStar className='w-3 h-3 md:w-6 md:h-6 text-yellow-600'/>
                            <FaStar className='w-3 h-3 md:w-6 md:h-6 text-yellow-600'/>
                            <FaStar className='w-3 h-3 md:w-6 md:h-6 text-yellow-600'/>
                            <FaStar className='w-3 h-3 md:w-6 md:h-6 text-yellow-600'/>
                        </div>
                        <div className='mt-10'>
                            <div className='items-center flex space-x-4'>
                                <Image src={review.image} alt={review.name} height={50} width={50} className='rounded-full'/>
                                <div>
                                    <p className='text-sm sm:text-lg font-semibold'>{review.name}</p>
                                    <p className='text-gray-500 text-xs sm:text-base'>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ReviewSlider