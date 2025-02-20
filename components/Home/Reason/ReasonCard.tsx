import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
}

const ReasonCard = ({image, title}: Props) => {
  return (
    <div>
        {/* Image */}
        <Image src={image} alt={title} width={70} height={70} className='mx-auto'/>
        {/* Text */}
        <h1 className='mt-4 text-lg font-semibold text-blue-950 text-center'>{title}</h1>
        <p className='text-sm text-gray-600 mt-3 font-medium text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default ReasonCard