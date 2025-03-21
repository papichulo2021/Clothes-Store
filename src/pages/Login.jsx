import React, { useState } from 'react';

function Login() {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add form submission logic here based on the current state
    if (currentState === 'Sign Up') {
      console.log('Signing up with', formData);
      // Add your Sign Up logic here
    } else {
      console.log('Logging in with', formData);
      // Add your Login logic here
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Sign Up' && (
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default Login;
