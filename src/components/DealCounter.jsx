import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function DealCounter({id}) {
  const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col lg:flex-row px-5 lg:px-30 py-7 lg:py-35 bg-[rgb(238,227,227)]">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <p className="font-bold text-[rgb(220,53,69)] uppercase">Deal of the week</p>
        <p className="text-4xl font-semibold">Oversized denim jacket</p>
        <p className="text-gray-500 font-semibold">
          <span className='line-through'>$129.00</span> <span className="ml-2">$79.00</span>
        </p>
        <button className="text-white font-bold w-full lg:w-[7vw] bg-[rgb(220,53,69)] px-3 py-2 mb-2">
          $50 off
        </button>
        <div className="w-full lg:w-[60vw] bg-white p-5 lg:p-7">
          <div className="flex justify-between px-5 lg:px-20 gap-4 mt-2">
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl">{timeLeft.days}</span>
              <span className='text-gray-500 font-semibold'>Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl">{timeLeft.hours}</span>
              <span className='text-gray-500 font-semibold'>Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl">{timeLeft.minutes}</span>
              <span className='text-gray-500 font-semibold'>Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl">{timeLeft.seconds}</span>
              <span className='text-gray-500 font-semibold'>Seconds</span>
            </div>
          </div>
        </div>
        <Link to={`/product/${id}`} className="w-full lg:w-1/4 text-center p-2 font-semibold border mt-4">
          Shop Now
        </Link>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        {/* You can place any other content or image here for desktop view */}
      </div>
    </div>
  );
}

export default DealCounter;
