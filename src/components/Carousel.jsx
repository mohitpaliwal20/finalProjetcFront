import React, { useState } from "react";
import "./Carousel.css"; 

const services = [
  { name: "Oil Change", img: "./Images/oilChnage.jpg" },
  { name: "Brake Repair", img: "./Images/brake.jpg" },
  { name: "Tire Replacement", img: "./Images/tire.jpeg" },
  { name: "Battery Check", img: "./Images/battery.png" },
  { name: "Engine Repair", img: "./Images/reapir.jpeg" },
  { name: "Car Wash", img: "./Images/car.jpg" },
  { name: "Alignment", img: "./Images/allig.jpeg" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };
  const getTranslateXValue = () => {
    return `translateX(-${currentIndex * (100 / 3)}%)`;
  };

  return (
    <div className="carousel-wrapper">
      <h2>Popular Services</h2>
      <div className="carousel">
        <button className="carousel-btn left-arrow" onClick={handlePrev}>
          &#9664;
        </button>
        <div className="carousel-track-container">
          <ul
            className="carousel-track"
            style={{ transform: getTranslateXValue() }}
          >
            {services.map((service, index) => {
              const isActive = index === currentIndex;
              return (
                <li
                  key={index}
                  className={`carousel-slide ${isActive ? "active" : ""}`}
                >
                  <div className="service-card">
                  <h3 className="service-name">{service.name}</h3>
                    <img
                      src={service.img}
                      alt={service.name}
                      className="service-image"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="carousel-btn right-arrow" onClick={handleNext}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
