import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
    const currency = '$';
    const delivery_fee = 10;
    const [cartItems, setCartItems] = useState({});


    const addToCart = async (itemId, size) => {
        if(!size) {
            toast.error('Select Product Size');
            return 
        }
        
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1 ;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    } 

    const getCartCount = () => {
        let totalCount = 0;
    
        // Loop over cartItems
        for (const itemId in cartItems) {
            const sizes = cartItems[itemId];
    
            // Loop over each size for the given itemId
            for (const size in sizes) {
                totalCount += sizes[size];  // Add the quantity of each size to the total count
            }
        }
    
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = async () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products , currency, delivery_fee,cartItems,addToCart,
        getCartCount,updateQuantity

    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;