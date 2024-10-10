import React from 'react';

const Step = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center mx-1 my-2">
      <div className="mb-2">
        <h2 className="text-xl text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <img src={image} alt={`${title} Image`} className="w-20 rounded-lg" />
    </div>
  );
};

export default Step;
