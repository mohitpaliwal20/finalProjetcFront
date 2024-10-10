import React from 'react';
const Card = ({ image, title, description }) => {
  return (
    <div className="card-container">
      <div className="image-block">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="text-block">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;