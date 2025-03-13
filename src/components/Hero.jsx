import React, { useState, useEffect } from 'react';

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroData = [
    {
      image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D",
      title: "Latest Arrival",
      subtitle: "Our BestSellers",
      buttonText: "Shop Now"
    },
    {
      image: "https://images.unsplash.com/photo-1587651048367-47d50462ab9c?w=300&auto=format&fit=crop&q=60",
      title: "New Season Collection",
      subtitle: "Fresh Styles for You",
      buttonText: "Explore Now"
    },
    {
      image: "https://images.unsplash.com/photo-1584821268249-6822f6e4a5a6?w=300&auto=format&fit=crop&q=60",
      title: "Special Discounts",
      subtitle: "Up to 50% Off",
      buttonText: "Shop the Sale"
    }
  ];

  // Automatically change the hero every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className='relative w-full h-screen bg-cover bg-center'
         style={{ backgroundImage: `url('${heroData[activeIndex].image}')` }}>
      {/* Overlay to reduce brightness */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Hero text positioned to the left-center */}
      <div className='absolute left-20 top-1/2 transform -translate-y-2/2 pl-8 sm:pl-12'>
        <div className='flex items-center gap-2'>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          <p className='font-medium text-sm md:text-base'>{heroData[activeIndex].subtitle}</p>
        </div>
        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>{heroData[activeIndex].title}</h1>
        <div className='flex items-center gap-2'>
          <p>{heroData[activeIndex].buttonText}</p>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
