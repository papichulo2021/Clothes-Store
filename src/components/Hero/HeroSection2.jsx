import React from 'react';

function HeroSection2() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587651048367-47d50462ab9c?w=300&auto=format&fit=crop&q=60')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Text and Button */}
      <div className="absolute left-20 top-1/2 transform -translate-y-2/2 pl-8 sm:pl-12">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-base">New Arrivals</p>
        </div>
        <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Shop New Trends</h1>
        <div className="flex items-center gap-2">
          <p>Browse Now</p>
          <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
        <button className='px-6 py-3 bg-black text-white mt-2'>Discover More</button>
      </div>
    </div>
  );
}

export default HeroSection2;
