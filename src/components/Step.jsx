import React from 'react';
import './Step.css';

const Step = ({ title, description, image }) => {
  return (
    <div className="step">
      <div className="text-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${title} Image`} className="step-image" />
    </div>
  );
};

export default Step;
