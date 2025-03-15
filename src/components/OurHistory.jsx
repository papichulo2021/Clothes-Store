import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper styles
import z1 from '../assets/z1.svg'; // Import the SVG file
import z2 from '../assets/z2.svg'; // Import the SVG file
import z3 from '../assets/z3.svg'; // Import the SVG file
import z4 from '../assets/z4.svg'; // Import the SVG file
import z5 from '../assets/z5.svg'; // Import the SVG file
import z6 from '../assets/z6.svg'; // Import the SVG file

function OurHistory() {
  return (
    <div className='flex flex-col justify-center gap-4 text py-20 mx-20'>
      <p className='text-xl sm:text-2xl md:text-3xl font-semibold tracking-[4px] text-[rgb(188,172,118)] uppercase'>
        Our History
      </p>
      <p className='text-gray-500 text-sm sm:text-base md:text-lg mt-4'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus totam dolores eaque impedit at
        quis beatae itaque cum hic. Alias excepturi, repudiandae quas repellendus animi suscipit rem et odio
        vel?
      </p>

      <div className='w-[40vw] mx-auto mt-8'> {/* Centered the Swiper container */}
        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={3} // Further reduce space between images
          slidesPerView={1} // Show 1 image per view on small screens
          loop={true} // Enable looping
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 images on medium screens
            },
            768: {
              slidesPerView: 3, // Show 3 images on large screens
            },
            1024: {
              slidesPerView: 4, // Show 4 images on extra-large screens
            },
          }}
          pagination={{ clickable: true }} // Keeps pagination dots
          autoplay={{
            delay: 3000, // Time interval between slides in milliseconds
            disableOnInteraction: false, // Autoplay doesn't stop when interacting
            pauseOnMouseEnter: true, // Pause autoplay when mouse is over the carousel
          }}
        >
          {/* Using the imported SVGs as images */}
          <SwiperSlide>
            <img
              src={z1}
              alt="Z1 Icon"
              className="w-20 h-26" // Custom size for larger screens
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={z2}
              alt="Z2 Icon"
              className="w-20 h-26" // Custom size for larger screens
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={z3}
              alt="Z3 Icon"
              className="w-20 h-26" // Custom size for larger screens
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={z4}
              alt="Z4 Icon"
              className="w-20 h-26" // Custom size for larger screens
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={z5}
              alt="Z5 Icon"
              className="w-20 h-26" // Custom size for larger screens
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={z6}
              alt="Z6 Icon"
              className="w-20 h-26" // Custom size for larger screens
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OurHistory;
