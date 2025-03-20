import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3 uppercase mb-0 lg:mb-10'>
        <p className='text-gray-500 sm:text-2xl md:text-3xl lg:text-4xl'>{text1} 
          <span className='text-gray-700 font-medium'> {text2}</span>
        </p>
        <p className='w-8  sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>

    </div>
  )
}

export default Title
