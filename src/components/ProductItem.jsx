import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaCartPlus, FaRegHeart, FaExpandAlt } from 'react-icons/fa'; // Imported icons

function ProductItem({ id, image, name, price, status }) {
  const { currency } = useContext(ShopContext);

  // Icons for the statuses
  const statusIcons = {
    'fresh': (
      <div className="absolute top-0 left-0 bg-green-500 text-white text-xs py-1 px-2 rounded-br-lg z-20">
        Fresh
      </div>
    ),
    'sold out': (
      <div className="absolute top-0 left-0 bg-red-500 text-white text-xs py-1 px-2 rounded-br-lg z-20">
        Sold Out
      </div>
    ),
    'sale': (
      <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs py-1 px-2 rounded-br-lg z-20">
        Sale
      </div>
    ),
  };

  return (
    <Link className="text-gray-700 cursor-pointer relative group" to={`/product/${id}`}>
      {/* Show the status icon if status is provided */}
      {status && statusIcons[status]}

      <div className="overflow-hidden relative">
        <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt={name} />
        
        {/* Hidden rectangle with icons, visible on hover */}
        <div className="flex justify-between absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.9)] hidden group-hover:flex items-center justify-between p-2">
          <button className="text-black text-sm hover:border-b">
            Add to Cart
          </button>
          <div className='flex gap-1'>
            <button className="text-black">
                <FaRegHeart /> {/* Favorites Icon */}
            </button>
            <button className="text-black">
                <FaExpandAlt /> {/* Expand Icon */}
            </button>
          </div>
        </div>
      </div>

      <p className="font-[500] pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm text-gray-400 font-medium">{currency}{price}</p>
    </Link>
  );
}

export default ProductItem;
