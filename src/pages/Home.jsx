import React from 'react'
import BestSeller from '../components/BestSeller'
import CategorySection from '../components/CategorySection'
import DealCounter from '../components/DealCounter'
import HeroCarousel from '../components/Hero/HeroCarousel'
import LatestCollection from '../components/LatestCollection'
import OurHistory from '../components/OurHistory'
import OurPolicy from '../components/OurPolicy'
function Home() {
  return (
    <div className=''>
      <HeroCarousel />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[rgb(248,249,250)] p-10'>
        <CategorySection />
        <LatestCollection />
        <BestSeller />
      </div>
        <DealCounter />
        <OurHistory />
        <OurPolicy />
    </div>
  )
}

export default Home
