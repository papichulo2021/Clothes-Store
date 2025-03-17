import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { GiMonclerJacket } from "react-icons/gi";
import { PiPantsDuotone } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

function Collection() {
  const { products } = useContext(ShopContext);
  const [isTrousersOpen, setIsTrousersOpen] = useState(false);
  const [isJacketsOpen, setIsJacketsOpen] = useState(false);
  const [isShirtOpen, setIsShirtOpen] = useState(false);

  const toggleCategory = (category) => {
    if (category === 'trousers') {
      setIsTrousersOpen(prev => !prev);
    } else if (category === 'jackets') {
      setIsJacketsOpen(prev => !prev);
    } else if (category === 'shirts') {
      setIsShirtOpen(prev => !prev);
    }
  };

  return (
    <div className='px-10 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>
      {/* Filter Option */}
      <div className='min-w-80'>
        <p className='my-2 text-xl font-[500] flex items-center cursor-pointer gap-2'>Category</p>
        {/* Category filter */}
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
                {/* Display trousers products */}
                {products.filter(product => product.category === 'Trousers').map(product => (
                  <div key={product.id} className="mb-4">
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                  </div>
                ))}
                {/* Links at the bottom */}
                <div className="flex flex-col gap-2 mt-4 ml-4 text-gray-500 text-sm font-[500]">
                  <p><Link to="/product-info">Product Information</Link></p>
                  <p><Link to="/details-of-trousers">Details of Trousers</Link></p>
                  <p><Link to="/additional-info">Additional Info</Link></p>
                </div>
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
                {/* Display jackets products */}
                {products.filter(product => product.category === 'Jackets').map(product => (
                  <div key={product.id} className="mb-4">
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                  </div>
                ))}
                {/* Links at the bottom */}
                <div className="flex flex-col gap-2 mt-4 ml-4 text-gray-500 text-sm font-[500]">
                  <p><Link to="/product-info">Product Information</Link></p>
                  <p><Link to="/details-of-jackets">Details of Jackets</Link></p>
                  <p><Link to="/additional-info">Additional Info</Link></p>
                </div>
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
                {/* Display t-shirts products */}
                {products.filter(product => product.category === 'T-Shirts').map(product => (
                  <div key={product.id} className="mb-4">
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                  </div>
                ))}
                {/* Links at the bottom */}
                <div className="flex flex-col gap-2 mt-4 ml-4 text-gray-500 text-sm font-[500]">
                  <p><Link to="/product-info">Product Information</Link></p>
                  <p><Link to="/details-of-tshirts">Details of T-Shirts</Link></p>
                  <p><Link to="/additional-info">Additional Info</Link></p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Collection;
