import React from 'react'
import CategorySection from '../components/CategorySection'
import HeroCarousel from '../components/Hero/HeroCarousel'
import LatestCollection from '../components/LatestCollection'
function Home() {
  return (
    <div className=''>
      <HeroCarousel />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[rgb(248,249,250)] p-10'>
        <CategorySection />
        <LatestCollection />
      </div>
    </div>
  )
}

export default Home
