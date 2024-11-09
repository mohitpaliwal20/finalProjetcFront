import React, { useState } from 'react';
import { FaWrench } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate('/store'); 
  };
  const handlemec = () => {
    navigate('/service'); 
  };
  return (
    <div className="relative min-h-screen flex bg-gradient-to-r from-gray-100 to-white text-gray-800">
      <div className="flex-1 flex flex-col justify-center items-start pl-12 pr-6 space-y-4">
        <div className="relative flex items-center space-x-3">
         
          <FaWrench className="text-4xl text-gray-600 animate-spin-slow" />
          <h1 className="text-5xl font-bold tracking-tight text-gray-700">
            Anywhere Mechanic
          </h1>
        </div>
        <p className="text-md italic text-gray-500 mt-2">
          "Your journey, our priority."
        </p>
        <div className="mt-4 flex gap-4">
          <button onClick={handle} className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-900 transition duration-200 shadow">
            Shop Now
          </button>
          <button
            onClick={handlemec}className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-900 transition duration-200 shadow"
          >
            Book Mechanic
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-start px-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">
          About Our Services
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Anywhere Mechanic provides top-tier repair services right at your doorstep. Our team of certified mechanics are available across the city to ensure your journey stays smooth and worry-free. From routine maintenance to emergency repairs, we handle it all with professionalism and efficiency.
        </p><br></br>
        <h3 className="text-lg font-medium text-gray-700 mb-2">Our Commitment:</h3>
        <div className="flex flex-row">
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Reliable and quick service</li>
          <li>Certified professionals</li>
          <li>Transparent pricing</li>
          <li>Customer satisfaction guaranteed</li>
        </ul>
        <FaCog className="text-7xl text-gray-500 animate-spin-slow" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
