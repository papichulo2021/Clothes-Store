import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);  // Add updateQuantity from context
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    // Iterate through the cartItems to structure them properly
    for (const itemId in cartItems) {
      if (cartItems.hasOwnProperty(itemId)) {
        const itemDetails = cartItems[itemId];

        // Iterate over the sizes for each item in cartItems
        for (const size in itemDetails) {
          if (itemDetails.hasOwnProperty(size) && itemDetails[size] > 0) {
            // Push the structured data
            tempData.push({
              _id: itemId,  // Assuming itemId is the product identifier
              size: size,
              quantity: itemDetails[size]
            });
          }
        }
      }
    }

    setCartData(tempData);  // Set the processed cart data
    console.log(tempData);   // This is to verify the data

  }, [cartItems]); // Re-run the effect when cartItems change

  return (
    <div className='mx-15 border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'Your'} text2={'Cart'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row items-center sm:items-start gap-4"
              >
                {/* Product Information - Left Side */}
                <div className='flex items-start gap-6 sm:w-2/5'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity Input - Center */}
                <div className="flex justify-center w-full sm:w-auto mx-auto">
                  <input
                    onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))}
                    className='border px-2 py-1 w-16 sm:w-24'
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    onBlur={(e) => updateQuantity(item._id, item.size, parseInt(e.target.value))}
                  />
                </div>

                {/* Remove Item (Bin Icon) - Right Side */}
                <div className="sm:w-1/5 mr-10 flex justify-end">
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}  // Use updateQuantity to remove item
                    className='w-5 cursor-pointer'
                    src={assets.bin_icon}
                    alt="Remove Item"
                  />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart;
