import React, { useState } from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`service-detail-container ${isOpen ? 'open' : ''}`} onClick={toggleDescription}>
      <div className="service-title-container">
        <h2 className="service-title">{title}</h2>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="service-description-container">
          <p className="service-description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
