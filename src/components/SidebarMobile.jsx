import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarMobile({ toggleMobileSidebar }) {
  return (
    <div className='fixed top-0 left-0 right-0 bg-white z-50 h-full'>
      {/* Top Bar */}
      <div className='flex justify-between items-center py-4 px-6 bg-slate-600 text-white'>
      <NavLink to='/'>
          <p className='font-logo text-4xl uppercase flex font-[600] items-center tracking-wider hover:dotMove'>
            Forever
            <span className='ml-2 w-[10px] h-[10px] rounded-full bg-[rgb(197,134,165)] inline-block transition-transform'></span>
          </p>
        </NavLink>

        <button onClick={toggleMobileSidebar} className='text-white text-2xl'>
          &times; {/* Close icon */}
        </button>
      </div>

      {/* Mobile Sidebar Content */}
      <div className='p-6'>
        <ul className='flex flex-col gap-4'>
          <li className='relative group'>
            <a
              href="/"
              className='text-lg text-gray-700 block border-b-2 border-transparent hover:border-[rgb(197,134,165)] hover:text-[rgb(197,134,165)] transition-all py-1'
            >
              Home
            </a>
          </li>
          <li className='relative group'>
            <a
              href="/collection"
              className='text-lg text-gray-700 block border-b-2 border-transparent hover:border-[rgb(197,134,165)] hover:text-[rgb(197,134,165)] transition-all py-1'
            >
              Collection
            </a>
          </li>
          <li className='relative group'>
            <a
              href="/about"
              className='text-lg text-gray-700 block border-b-2 border-transparent hover:border-[rgb(197,134,165)] hover:text-[rgb(197,134,165)] transition-all py-1'
            >
              About
            </a>
          </li>
          <li className='relative group'>
            <a
              href="/contact"
              className='text-lg text-gray-700 block border-b-2 border-transparent hover:border-[rgb(197,134,165)] hover:text-[rgb(197,134,165)] transition-all py-1'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarMobile;
