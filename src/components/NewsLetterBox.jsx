import React from 'react'

function NewsLetterBox() {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='p-10'>
      <p className='font-[500] text-2xl mb-2'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 font-[500]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form 
        onClick={onSubmitHandler}
        className='w-full  flex items-center gap-3 mx-auto my-6 border pl-3 '>
          <input 
            type="email" 
            placeholder='Enter your email'
            className='w-full sm:flex-1 outline-none'
            required
            />
            <button 
                className='bg-black text-white text-xs px-10 py-4'
                type='submit'>Subscribe
            </button>
      </form>
    </div>
  )
}

export default NewsLetterBox
