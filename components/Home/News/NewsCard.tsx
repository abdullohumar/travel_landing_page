import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
    date: string;
}

const NewsCard = ({ image, title, date }: Props) => {
    return (
        <div>
            <div className='h-[300px]'>
                <Image src={image} alt={title} height={300} width={300} className='rounded-xl object-cover w-full h-full' />
            </div>
            <p className='mt-4 text-lg font-semibold'>{title}</p>
            <p className='text-sm text-gray-600 mt-3 font-medium'>{date}</p>
        </div>
    )
}

export default NewsCard