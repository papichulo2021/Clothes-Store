const SizeFilter = () => {
    return (
      <div className='mt-8 min-w-80 mb-5'>
        <p className='my-2 text-xl font-[500] flex items-center cursor-pointer gap-2 mb-5'>Size</p>
        <div className='flex flex-col gap-3 text-sm font-[400] ml-7 '>
          <p className='flex gap-5 text-lg'>
            <input className='w-6 h-6 rounded-full border-2 border-gray-400 appearance-none checked:bg-blue-500' type="checkbox" value={'Small'} />
            Small
          </p>
          <p className='flex gap-5 text-lg'>
            <input className='w-6 h-6 rounded-full border-2 border-gray-400 appearance-none checked:bg-blue-500' type="checkbox" value={'Medium'} />
            Medium
          </p>
          <p className='flex gap-5 text-lg'>
            <input className='w-6 h-6 rounded-full border-2 border-gray-400 appearance-none checked:bg-blue-500' type="checkbox" value={'Large'} />
            Large
          </p>
          <p className='flex gap-5 text-lg'>
            <input className='w-6 h-6 rounded-full border-2 border-gray-400 appearance-none checked:bg-blue-500' type="checkbox" value={'X-large'} />
            X-Large
          </p>
        </div>
      </div>
    );
  };
  
  export default SizeFilter;
  