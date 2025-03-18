import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { GiMonclerJacket } from "react-icons/gi";
import { PiPantsDuotone } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";

const CategoryFilter = ({ products, toggleCategory, isTrousersOpen, isJacketsOpen, isShirtOpen }) => {
  return (
    <div className='flex flex-col gap-5 pl-5 py-3 mt-6'>
      {/* Trousers */}
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-5'>
            <PiPantsDuotone className='text-3xl' />
            <div className='font-[500]'>
              Trousers
            </div>
          </div>
          <button onClick={() => toggleCategory('trousers')}>
            {isTrousersOpen ? (
              <MdKeyboardArrowDown className='text-3xl text-gray-500' />
            ) : (
              <MdKeyboardArrowLeft className='text-3xl text-gray-500' />
            )}
          </button>
        </div>
        {isTrousersOpen && (
          <div className="pl-10">
            {products.filter(product => product.category === 'Trousers').map(product => (
              <div key={product.id} className="mb-4">
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <hr className="border-gray-300" />
      
      {/* Jackets */}
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-5'>
            <GiMonclerJacket className='text-3xl' />
            <div className='font-[500]'>
              Jackets
            </div>
          </div>
          <button onClick={() => toggleCategory('jackets')}>
            {isJacketsOpen ? (
              <MdKeyboardArrowDown className='text-3xl text-gray-500' />
            ) : (
              <MdKeyboardArrowLeft className='text-3xl text-gray-500' />
            )}
          </button>
        </div>
        {isJacketsOpen && (
          <div className="pl-10">
            {products.filter(product => product.category === 'Jackets').map(product => (
              <div key={product.id} className="mb-4">
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <hr className="border-gray-300" />

      {/* T-Shirts */}
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-5'>
            <IoShirt className='text-3xl' />
            <div className='font-[500]'>
              T-Shirts
            </div>
          </div>
          <button onClick={() => toggleCategory('shirts')}>
            {isShirtOpen ? (
              <MdKeyboardArrowDown className='text-3xl text-gray-500' />
            ) : (
              <MdKeyboardArrowLeft className='text-3xl text-gray-500' />
            )}
          </button>
        </div>
        {isShirtOpen && (
          <div className="pl-10">
            {products.filter(product => product.category === 'T-Shirts').map(product => (
              <div key={product.id} className="mb-4">
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
