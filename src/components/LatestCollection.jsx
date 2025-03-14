import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title'

function LatestCollection() {
  const {products} = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>
  {
      setLatestProducts(products.slice(0,12));
  },[])


  return (
    <div className='my-15'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collection'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero voluptatibus repudiandae reprehenderit, unde atque exercitationem tenetur deserunt! Consectetur saepe cum vitae tenetur animi error tempora dolore aut asperiores beatae?
            </p>
        </div>
        {/* Render Products 12 */}
        <div className="mt-0 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-6">
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} status={item.status} name={item.name} image={item.image} price={item.price} />
            ))
        }
        </div>



    </div>
  )
}

export default LatestCollection
