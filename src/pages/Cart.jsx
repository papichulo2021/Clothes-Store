import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'

function Cart() {
  const {products, currency, cartItems} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    
  },[])

  return (
    <div>
      Cart
    </div>
  )
}

export default Cart
