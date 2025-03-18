import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from 'react-icons/md';
import { GiMonclerJacket } from 'react-icons/gi';
import { PiPantsDuotone } from 'react-icons/pi';
import { IoShirt } from 'react-icons/io5';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

function Collection() {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant')
  const [visibility, setVisibility] = useState({
    category: false,
    genre: false,
    size: false,
    trouser: false,
    jacket: false,
    shirt: false,
    type: false,
  });
  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value])
    }
  }
  
  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }
  
  const toggleVisibility = (section) => {
    setVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  
  const applyFilter = () => {
    let productsCopy = products.slice();
  
    // Apply category filter
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
  
    // Apply subcategory filter
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.some(subCat => item.subCategory.includes(subCat)));
    }
  
    setFilterProducts(productsCopy);
  }
  // Sort Products 
  const sortProducts = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break; 
    }
  }


  useEffect(()=>{
    setFilterProducts(products);
  },[subCategory]);
  
  useEffect(()=>{
    applyFilter();
  },[category, subCategory]);

  useEffect(()=>{
    sortProducts()
  },[sortType])
  
  return (
    <div className="px-10 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p className="my-2 text-xl font-[500] flex items-center cursor-pointer gap-2">
          Category
        </p>
        {/* Category filter */}
        <div className="flex flex-col gap-5 pl-5 py-3 mt-6">
          {/* Trousers */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <PiPantsDuotone className="text-3xl" />
                <div className="font-[500]">Trousers</div>
              </div>
              <button onClick={() => toggleVisibility('trouser')}>
                {visibility.trouser ? (
                  <MdKeyboardArrowDown className="text-3xl text-gray-500" />
                ) : (
                  <MdKeyboardArrowLeft className="text-3xl text-gray-500" />
                )}
              </button>
            </div>
            {visibility.trouser && (
              <div className="pl-10">
                {/* Display trousers products */}
                {products
                  .filter((product) => product.category === 'Trousers')
                  .map((product) => (
                    <div key={product.id} className="mb-4">
                      <div>{product.name}</div>
                      <div>{product.price}</div>
                    </div>
                  ))}
                {/* Links at the bottom */}
                <div className="flex flex-col gap-2 mt-4 ml-4 text-gray-500 text-sm font-[500]">
                  <p className='hover:underline'>
                    <Link to="/product-info">Cropped Trousers</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/details-of-trousers">Pleated Trousers</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Paperbag Waist</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Harem Pants</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Vegan Leather Trousers</Link>
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="border-gray-300" />

          {/* Jackets */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <GiMonclerJacket className="text-3xl" />
                <div className="font-[500]">Jackets</div>
              </div>
              <button onClick={() => toggleVisibility('jacket')}>
                {visibility.jacket ? (
                  <MdKeyboardArrowDown className="text-3xl text-gray-500" />
                ) : (
                  <MdKeyboardArrowLeft className="text-3xl text-gray-500" />
                )}
              </button>
            </div>
            {visibility.jacket && (
              <div className="pl-10">
                {/* Display jackets products */}
                {products
                  .filter((product) => product.category === 'Jackets')
                  .map((product) => (
                    <div key={product.id} className="mb-4">
                      <div>{product.name}</div>
                      <div>{product.price}</div>
                    </div>
                  ))}
                {/* Links at the bottom */}
                <div className="flex flex-col gap-2 mt-4 ml-4 text-gray-500 text-sm font-[500]">
                  <p className='hover:underline'>
                    <Link to="/product-info">Bomber Jackets</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/details-of-jackets">Denim Jackets</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Leather Jackets</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Trench Coats</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Puffer Jackets</Link>
                  </p>
                </div>
              </div>
            )}
          </div>

          <hr className="border-gray-300" />

          {/* T-Shirts */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <IoShirt className="text-3xl" />
                <div className="font-[500]">T-Shirts</div>
              </div>
              <button onClick={() => toggleVisibility('shirt')}>
                {visibility.shirt ? (
                  <MdKeyboardArrowDown className="text-3xl text-gray-500" />
                ) : (
                  <MdKeyboardArrowLeft className="text-3xl text-gray-500" />
                )}
              </button>
            </div>
            {visibility.shirt && (
              <div className="pl-10">
                {/* Display t-shirts products */}
                {products
                  .filter((product) => product.category === 'T-Shirts')
                  .map((product) => (
                    <div key={product.id} className="mb-4">
                      <div>{product.name}</div>
                      <div>{product.price}</div>
                    </div>
                  ))}
                {/* Links at the bottom */}
                <div className="flex flex-col gap-2 mt-4 ml-4 text-gray-500 text-sm font-[500]">
                  <p className='hover:underline'>
                    <Link to="/product-info">Button-Down Shirts</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/details-of-tshirts">T-Shirts</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Polo Shirts</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Henley Shirts</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Flannel Shirts</Link>
                  </p>
                  <p className='hover:underline'>
                    <Link to="/additional-info">Dress Shirts</Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* - - - - - - - Type Filter  - - - - - - - - - */}
        <hr className="my-5 border-gray-300" />
        <div>
          <div className="flex justify-between">
            <p className="my-2 text-xl font-[500] flex items-center cursor-pointer gap-2">
              Type
            </p>
            <button onClick={() => toggleVisibility('type')}>
              {visibility.type ? (
                <MdKeyboardArrowDown className="text-3xl text-gray-500" />
              ) : (
                <MdKeyboardArrowLeft className="text-3xl text-gray-500" />
              )}
            </button>
          </div>
          {/*  - - Genre Filter - -  */}
          {visibility.type && (
            <div className="flex flex-col gap-3 font-light text-gray-700 ml-5">
              <p className="flex items-center gap-4 mt-2">
                <input
                  onChange={toggleSubCategory}
                  className="w-5 h-5 rounded-full border-2 border-gray-400 checked:bg-gray-400"
                  type="checkbox"
                  value={'Topwear'}
                />
                <span className="font-[400]">Topwear</span>
              </p>
              <p className="flex items-center gap-4">
                <input
                  onChange={toggleSubCategory}
                  className="w-5 h-5 rounded-full border-2 border-gray-400 checked:bg-gray-400"
                  type="checkbox"
                  value={'Bottomwear'}
                />
                <span className="font-[400]">BottomWear</span>
              </p>
              <p className="flex items-center gap-4">
                <input
                  onChange={toggleSubCategory}
                  className="w-5 h-5 rounded-full border-2 border-gray-400 checked:bg-gray-400"
                  type="checkbox"
                  value={'Winterwear'}
                />
                <span className="font-[400]">WinterWear</span>
              </p>
            </div>
          )}
        </div>

        {/* - - - - - - - Genre Filter  - - - - - - - - - */}
        <hr className="my-5 border-gray-300" />
        <div>
          <div className="flex justify-between">
            <p className="my-2 text-xl font-[500] flex items-center cursor-pointer gap-2">
              Audience
            </p>
            <button onClick={() => toggleVisibility('genre')}>
              {visibility.genre ? (
                <MdKeyboardArrowDown className="text-3xl text-gray-500" />
              ) : (
                <MdKeyboardArrowLeft className="text-3xl text-gray-500" />
              )}
            </button>
          </div>
          {/*  - - Genre Filter - -  */}
          {visibility.genre && (
            <div className="flex flex-col gap-3 font-light text-gray-700 ml-5">
              <p className="flex items-center gap-4 mt-2">
                <input
                  onChange={toggleCategory}
                  className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none checked:bg-gray-400"
                  type="checkbox"
                  value={'Men'}
                />
                <span className="font-[400]">Man</span>
              </p>
              <p className="flex items-center gap-4">
                <input
                  onChange={toggleCategory}
                  className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none checked:bg-gray-400"
                  type="checkbox"
                  value={'Women'}
                />
                <span className="font-[400]">Women</span>
              </p>
              <p className="flex items-center gap-4">
                <input
                  onChange={toggleCategory}
                  className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none checked:bg-gray-400"
                  type="checkbox"
                  value={'Kids'}
                />
                <span className="font-[400]">Kids</span>
              </p>
            </div>
          )}
        </div>
        
        {/* - - -  Size Category - - -   */}
        <hr className="my-5 border-gray-300" />
        <div className='flex justify-between'>
          <p className="my-2 text-xl font-[500] flex items-center cursor-pointer gap-2">
            Size
          </p>
          <button onClick={() => toggleVisibility('size')}>
            {visibility.size ? (
              <MdKeyboardArrowDown className="text-3xl text-gray-500" />
            ):(
              <MdKeyboardArrowLeft className="text-3xl text-gray-500" />
            )}
          </button>
          </div>
          {/*  - - Size Filter - -  */}
          {visibility.size && (
          <div className="flex flex-col gap-3 font-light text-gray-700 ml-5">
            <p className="flex items-center gap-4 mt-2">
              <input
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none checked:bg-gray-400"
                type="checkbox"
                value={'Small'}
              />
              <span className="font-[400]">Small</span>
            </p>
            <p className="flex items-center gap-4">
              <input
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none checked:bg-gray-400"
                type="checkbox"
                value={'Medium'}
              />
              <span className="font-[400]">Medium</span>
            </p>
            <p className="flex items-center gap-4">
              <input
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none checked:bg-gray-400"
                type="checkbox"
                value={'Large'}
              />
              <span className="font-[400]">Large</span>
            </p>
            <p className="flex items-center gap-4">
              <input
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none checked:bg-gray-400"
                type="checkbox"
                value={'X-Large'}
              />
              <span className="font-[400]">X-Large</span>
            </p>
          </div>
          )}
      </div>
    {/*--- Right Side ---*/}
      <div className='flex-1'>
        <div className='flex align-center justify-between max-h-10 text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'} />
          {/* Product Sort */}
          <select
            onChange={(e)=>setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relevant'>Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low </option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              ))
            }
        </div>

      </div>


    </div>
  );
}

export default Collection;
