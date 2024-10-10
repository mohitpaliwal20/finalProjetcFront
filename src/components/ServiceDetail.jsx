import React, { useState } from 'react';

const ServiceDetail = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`my-4 p-4 rounded-lg bg-green-100 shadow-md cursor-pointer transition-all duration-300 ease-in-out border-l-4 ${
        isOpen ? 'bg-green-200' : ''
      }`}
      onClick={toggleDescription}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <span
          className={`text-2xl text-gray-800 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 opacity-100 animate-fadeIn">
          <p className="text-base leading-7 text-gray-600 pl-4 border-l-4 border-gray-200">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;