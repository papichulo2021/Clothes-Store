import React from 'react'; // Import React
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HeroSection1 from './HeroSection1';
import HeroSection2 from './HeroSection2';
import HeroSection3 from './HeroSection3';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeroCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]} // Add the modules here
      className="hero-swiper" // Added a custom class for Swiper
    >
      <SwiperSlide>
        <HeroSection1 />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection2 />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection3 />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroCarousel;
