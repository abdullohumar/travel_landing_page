import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Reason from './Reason/Reason'
import Review from './Reviews/Review'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination/>
      <Hotel/>
      <Reason/>
      <Review/>
    </div>
  )
}

export default Home