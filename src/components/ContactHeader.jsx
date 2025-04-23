import React from 'react';
import contactImage from '../assets/bg.png'

const ContactHeader = () => {
  return (
    <div className="relative w-full h-64 md:h-96">
      {/* Background image from Unsplash */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1744648604045-7f6dc7938539?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-widest uppercase">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactHeader;
