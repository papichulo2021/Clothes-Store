import React, { useContext, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import Sidebar from './Sidebar';
import SidebarMobile from './SidebarMobile';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  const {getCartCount} = useContext(ShopContext);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const toggleMobileSidebar = () => {
    setSidebarMobileOpen(prevState => !prevState);
  };

  return (
    <div className='flex items-center justify-between py-6'>
      <div>
        <NavLink to='/'>
          <p className='font-logo text-4xl uppercase flex font-[600] items-center tracking-wider hover:dotMove'>
            Forever
            <span className='ml-2 w-[10px] h-[10px] rounded-full bg-[rgb(197,134,165)] inline-block transition-transform'></span>
          </p>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
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
        <Link to={'/login'}><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
        <NavLink to='/cart' className="relative">
          <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
          {/* Notification Badge at Bottom-Right */}
          <p className='absolute bottom-[-5px] right-[-6px] w-4 h-4 text-xs font-semibold text-white bg-black rounded-full flex justify-center items-center'>
            {getCartCount()}
          </p>
        </NavLink>
        {/* Menu Icon for Desktop */}
        <img src={assets.menu_icon} className='w-5 cursor-pointer hidden sm:block' onClick={toggleSidebar} alt="" />
        {/* Menu Icon for Mobile */}
        <img src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' onClick={toggleMobileSidebar} alt="" />
      </div>

      {/* Sidebar Mobile */}
      {sidebarMobileOpen && <SidebarMobile toggleMobileSidebar={toggleMobileSidebar} sidebarMobileOpen={sidebarMobileOpen} />}
      
      {/* Sidebar Desktop */}
      {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />}
    </div>
  );
}

export default Navbar;
