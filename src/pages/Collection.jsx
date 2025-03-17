import React, { useContext, useState } from 'react'
import {ShopContext} from '../context/ShopContext'

function Collection() {
  const { products }  = useContext(ShopContext);
  const [isTrousersOpen, setIsTrouserOpen] = useState(false)
  

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='px-10 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>
      
      {/* Filter Option */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>Category</p>
          {/* Category filter */}
          <div className='border border-gray-300 pl-5 py-3 mt-6'>

          </div>
      </div>

    </div>
  )
}

export default Collection
