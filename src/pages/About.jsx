import React from 'react'
import { assets } from '../assets/assets'
import OurPolicy from '../components/OurPolicy'

function About() {
  return (
    <div>
    <div className='mx-10'>
      <div className='flex flex-col py-22 mx-20 sm:mx-30 md:mx-40 lg:mx-50  w-[50%]'>
        {/* "About Us" and line container */}
        <div className="relative mb-5">
          {/* Horizontal Line on the Left, Absolute Position */}
          <hr className='absolute left-[-160px] top-1/2 transform -translate-y-1/2 w-20 border-none h-[0.1px] bg-gray-400' />
          
          {/* "About Us" Text */}
          <p className='text-lg font-[600] text-[rgb(188,172,118)] tracking-[5px] uppercase'>
            About Us
          </p>
        </div>

        <p className='text-4xl md:text-5xl lg:text-7xl font-bold'>We are Varkala</p>
        <p className='sm:text-lg md:text-xl lg:text-xl font-[600] mt-12 text-gray-400'>
          One morning, when Gregor Samsa woke from troubled dreams, 
          he found himself transformed in his bed into a horrible vermin. 
          He lay on his armour-like back, and if he lifted his head a little 
          he could see his brown belly, slightly domed and divided by arches
          into stiff sections.
        </p>
      </div>

      <div className='flex flex-col py-18 mx-20 sm:mx-30 md:mx-40 lg:mx-50 w-[60%]'>
        {/* "The Old Times" and line container */}
        <div className="relative mb-5">
          {/* Horizontal Line on the Left, Absolute Position */}
          <hr className='absolute left-[-160px] top-1/2 transform -translate-y-1/2 w-20 border-none h-[0.1px] bg-gray-400' />
          
          {/* "The Old Times" Text */}
          <p className='text-lg font-[600] text-[rgb(188,172,118)] tracking-[5px] uppercase'>
            The old times
          </p>
        </div>
        <p className='text-4xl md:text-5xl lg:text-7xl font-bold'>
          History of Varkala
        </p>
      </div>
      
      <div className='mx-10 flex flex-col md:flex-row justify-center items-center gap-10'>
        {/* Image on the Left */}
        <div className='w-[40%]'>
          <img className='w-[80%] h-[30%]' src={assets.about} alt="About Us" />
        </div>

        {/* Text content on the right side */}
        <div className='w-[60%]'>
          <p className='text-xl text-gray-500 font-bold tracking-[4px] uppercase'>Humble Beginnings</p>
          <p className='text-3xl font-bold mt-2'>We started as little...</p>
          <p className='w-[85%] mt-8 text-gray-500'>
            The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.
          </p>
        </div>
      </div>

      <div className='mx-10 py-20 flex flex-col md:flex-row justify-center items-center gap-10'>
        {/* Text content on the right side */}
        <div className='w-[50%]'>
          <p className='text-xl text-gray-500 font-bold tracking-[4px] uppercase'>Humble Beginnings</p>
          <p className='text-3xl font-bold mt-2'>We started as little...</p>
          <p className='w-[85%] mt-8 text-gray-500'>
            The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.
          </p>
        </div>
                {/* Image on the Left */}
        <div className='w-[50%]'>
          <img className='w-[80%] h-[30%]' src={assets.about2} alt="About Us" />
        </div>
      </div>
    </div>
    <OurPolicy />
    </div>
  )
}

export default About
