import React from 'react'
import NewsLetterBox from './NewsLetterBox';
function Footer() {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 my-10 mt-15 text-sm'>
      <div className='w-full md:w-3/3 '>
        <NewsLetterBox />
      </div>

      <div className=''>
        <p className='text-xl font-[500] mb-5'>Shop</p>
          <ul className='flex flex-col gap-3 text-gray-500 font-[500]'>
            <li>For Women</li>
            <li>For Men</li>
            <li>Sotres</li>
            <li>Our Blog</li>
            <li>Shop</li>
          </ul>
      </div>

      <div className=''>
        <p className='text-xl font-[500] mb-5'>Company</p>
        <ul className='flex flex-col gap-3 text-gray-500 font-[500]'>
          <li>Home </li>
          <li>Collection</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      
      </div>
      <div className=''>
        <p className='text-xl font-[500] mb-5'>Your Account</p>
        <ul className='flex flex-col gap-3 text-gray-500 font-[500]'>
          <li>Login</li>
          <li>Register</li>
          <li>Wishlist</li>
          <li>Our Products</li>
          <li>Checkouts</li>
        </ul>
      </div>
    </div>
    {/* Copyrights */}
    <div className='flex justify-between p-6 text-sm text-gray-400 border-t '>
        <p className=''>© 2025 Forever. All rights reserved.</p>
        <p>Terms & ConditionsPrivacy & cookiesAccessibilityCustomer Data Promise</p>
      </div>
    </div>

  )
}

export default Footer
