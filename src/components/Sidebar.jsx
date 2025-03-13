import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ toggleSidebar }) {
  return (
    <div className='fixed top-0 p-2 right-0 h-full sm:w-[300px] md:w-[497px] bg-white shadow-lg z-50'>
      <div className='flex justify-between items-center p-4'>
        <div>
            <p className='font-logo text-4xl uppercase flex font-[600] items-center tracking-wider hover:dotMove'>
            Forever
            <span className='ml-2 w-[10px] h-[10px] rounded-full bg-[rgb(197,134,165)] inline-block transition-transform'></span>
            </p>
        </div>
        <button
          onClick={toggleSidebar}
          className='text-5xl font-[200] text-gray-500 transform transition-transform hover:rotate-90'
        >
          &times;
        </button>
      </div>
      <div className='flex flex-col items-start p-10'>
        <NavLink to='/' className='py-2 text-lg text-gray-700' onClick={toggleSidebar}>
          Home
        </NavLink>
        <NavLink to='/collection' className='py-2 text-lg text-gray-700' onClick={toggleSidebar}>
          Collection
        </NavLink>
        <NavLink to='/about' className='py-2 text-lg text-gray-700' onClick={toggleSidebar}>
          About
        </NavLink>
        <NavLink to='/contact' className='py-2 text-lg text-gray-700' onClick={toggleSidebar}>
          Contact
        </NavLink>
        <div className='mt-4 text-gray-600'>
          <p>Quick Summary:</p>
          <p className='text-sm'>
            This is a simple sidebar component with links to different pages and a brief summary of the site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
