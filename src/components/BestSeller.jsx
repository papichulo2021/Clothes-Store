import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

function BestSeller() {
  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(()=>{
    const bestProduct = products.filter((item) => (item.bestseller))
    setBestSeller(bestProduct.slice(0,6))

  },[])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
          <Title text1={'Best'} text2={'Sellers'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero voluptatibus repudiandae reprehenderit, unde atque exercitationem tenetur deserunt! Consectetur saepe cum vitae tenetur animi error tempora dolore aut asperiores beatae?
          </p>
      </div>
      <div className="mt-0 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-6">
        {
          bestSeller.map((item,index) => (
            <ProductItem  key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
