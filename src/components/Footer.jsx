import React, { useState } from 'react';
import NewsLetterBox from './NewsLetterBox';

function Footer() {
  // State to toggle visibility of the lists on mobile
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div>
      <div className="mx-10 sm: md:mx-0 flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-5 lg:gap-14 my-10 mt-15 text-sm">
        <div className="w-full md:w-3/3 ">
          <NewsLetterBox />
        </div>

        <div className="">
          <div className="flex justify-between items-center mb-5">
            <p className="text-xl font-[500]">Shop</p>
            {/* On mobile, show the "+" button to toggle the list */}
            <button
              className="sm:hidden text-gray-500 font-[500] text-3xl"
              onClick={() => setIsShopOpen(!isShopOpen)}
            >
              {isShopOpen ? '-' : '+'}
            </button>
          </div>
          {/* Show the list only when it's not on mobile or is toggled on */}
          <ul className={`sm:flex flex-col gap-3 text-gray-500 font-[500] ${isShopOpen ? 'block' : 'hidden'} sm:block`}>
            <li>For Women</li>
            <li>For Men</li>
            <li>Sotres</li>
            <li>Our Blog</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="">
          <div className="flex justify-between items-center mb-5">
            <p className="text-xl font-[500]">Company</p>
            <button
              className="sm:hidden text-gray-500 font-[500] text-3xl"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              {isCompanyOpen ? '-' : '+'}
            </button>
          </div>
          <ul className={`sm:flex flex-col gap-3 text-gray-500 font-[500] ${isCompanyOpen ? 'block' : 'hidden'} sm:block`}>
            <li>Home</li>
            <li>Collection</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <div className="flex justify-between items-center mb-5">
            <p className="text-xl font-[500]">Your Account</p>
            <button
              className="sm:hidden text-gray-500 font-[500] text-3xl"
              onClick={() => setIsAccountOpen(!isAccountOpen)}
            >
              {isAccountOpen ? '-' : '+'}
            </button>
          </div>
          <ul className={`sm:flex flex-col gap-3 text-gray-500 font-[500] ${isAccountOpen ? 'block' : 'hidden'} sm:block`}>
            <li>Login</li>
            <li>Register</li>
            <li>Wishlist</li>
            <li>Our Products</li>
            <li>Checkouts</li>
          </ul>
        </div>
      </div>
      {/* Copyrights */}
      <div className="flex justify-between p-6 text-sm text-gray-400 border-t ">
        <p>© 2025 Forever. All rights reserved.</p>
        <p>Terms & ConditionsPrivacy & cookiesAccessibilityCustomer Data Promise</p>
      </div>
    </div>
  );
}

export default Footer;
