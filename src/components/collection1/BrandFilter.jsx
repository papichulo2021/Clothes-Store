const BrandFilter = () => {
    return (
      <div className='mt-8 min-w-80 mb-5'>
        <p className='my-2 text-xl font-[500] flex items-center cursor-pointer gap-2 mb-5'>Categories</p>
        <div className='flex flex-col gap-3 text-sm font-[400] ml-7 '>
          <p className='flex gap-5 text-lg'>
            <input className='w-5' type="checkbox" value={'Men'} /> Men
          </p>
          <p className='flex gap-5 text-lg'>
            <input className='w-5' type="checkbox" value={'Women'} /> Women
          </p>
          <p className='flex gap-5 text-lg'>
            <input className='w-5' type="checkbox" value={'Kids'} /> Kids
          </p>
        </div>
      </div>
    );
  };
  
  export default BrandFilter;
  