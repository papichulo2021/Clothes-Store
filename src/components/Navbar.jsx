import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import Sidebar from './Siderbar';
function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className='flex items-center justify-between py-6'>
      <div>
        <p className='font-logo text-4xl uppercase flex font-[600] items-center tracking-wider hover:dotMove'>
          Forever
          <span className='ml-2 w-[10px] h-[10px] rounded-full bg-[rgb(197,134,165)] inline-block transition-transform'></span>
        </p>
      </div>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 uppercase font-semibold'>
        <NavLink to='/' className='relative group'>
          <p>Home</p>
          <hr className='w-full border-none h-[2px] bg-[rgb(197,134,165)] absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity' />
        </NavLink>
        <NavLink to='/collection' className='relative group'>
          <p>Collection</p>
          <hr className='w-full border-none h-[2px] bg-[rgb(197,134,165)] absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity' />
        </NavLink>
        <NavLink to='/about' className='relative group'>
          <p>About</p>
          <hr className='w-full border-none h-[2px] bg-[rgb(197,134,165)] absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity' />
        </NavLink>
        <NavLink to='/contact' className='relative group'>
          <p>Contact</p>
          <hr className='w-full border-none h-[2px] bg-[rgb(197,134,165)] absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity' />
        </NavLink>
      </ul>

      {/* Sidebar */}
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
        <img src={assets.menu_icon} className='w-5 cursor-pointer' onClick={toggleSidebar} alt="" />
      </div>

      {/* Render Sidebar */}
      {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />}
    </div>
  );
}

export default Navbar;
