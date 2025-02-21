import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div className='py-16'>
            {/* section heading */}
            <SectionHeading heading='Exciting Destinations News' description='Find your next destination' />
            {/* section content */}
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20 items-center'>
                <NewsCard
                    image='/images/n1.jpg'
                    title='10 Destinations to Visit in Thailand'
                    date='May 5, 2023' />
                <NewsCard
                    image='/images/n2.jpg'
                    title='10 Destinations to Visit in Paris'
                    date='April 21, 2023' />
                <NewsCard
                    image='/images/n3.jpg'
                    title='10 Destinations to Visit in Dubai'
                    date='February 10, 2023' />
                <NewsCard
                    image='/images/n4.jpg'
                    title='10 Destinations to Visit in Japan'
                    date='January 5, 2023' />
            </div>
        </div>
    )
}

export default News