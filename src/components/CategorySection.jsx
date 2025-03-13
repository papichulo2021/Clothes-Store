import React from 'react';
import { assets } from '../assets/assets';

function CategorySection() {
  return (
    <div className="relative flex gap-6 mt-10 justify-between items-center w-full flex-col md:flex-row">
      {/* Box for bg image */}
      <div className="relative w-[351px] h-[449px] md:w-[546px] md:h-[699px] overflow-hidden group">
        <img
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-70"
          src={assets.bg}
          alt="Background"
        />
        <div className="absolute inset-0 flex justify-center items-center text-black text-3xl md:text-7xl font-bold">
          Man
        </div>
      </div>

      {/* Box for cuatro image */}
      <div className="relative w-[351px] h-[449px] md:w-[546px] md:h-[699px] overflow-hidden group">
        <img
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-70"
          src={assets.cuatro}
          alt="Cuatro"
        />
        <div className="absolute inset-0 flex justify-center items-center text-black text-3xl md:text-7xl font-bold">
          Women
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
