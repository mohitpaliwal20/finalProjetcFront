import React from 'react';

const FooterHeader = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white">
      <p className="text-black text-lg">HEARD ENOUGH?</p>
      <h1 className="text-black text-4xl">Join Us Now</h1>
      <a href="/register" className="no-underline">
        <div className="bg-gray-900 w-24 h-20 rounded-full flex justify-center items-center text-2xl text-gray-200">
          Sign Up
        </div>
      </a>
    </div>
  );
};

export default FooterHeader;
