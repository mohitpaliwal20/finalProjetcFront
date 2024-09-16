import React from 'react';
import './MeetYourMechanic.css';

const MeetYourMechanic = () => {
  return (
    <div className="container">
      <div className="text-container">
      <h1 className="heading">Meet Your Anywhere Mechanic</h1>
      <br></br><br></br>
        <p className="text">
        Imagine having a highly skilled mechanic ready to assist you, no matter where you are—that’s the power of our Anywhere Mechanic service. Our Anywhere Mechanics are dedicated professionals who bring their expertise directly to you, ensuring your vehicle gets the care it needs without the hassle of a traditional shop visit. Not only can you book a mechanic to come to your location, but you can also browse and purchase high-quality parts through our platform. For mechanics, this is a unique opportunity to expand your business by accessing a wide range of job opportunities and connecting with customers who need your skills. Whether you're at home, at work, or stranded on the road, our Anywhere Mechanics are just a call away, delivering exceptional service and convenience right where you need it. Experience automotive care redefined with our commitment to reliability, efficiency, and top-notch service, wherever life takes you.
        </p>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <img src="./Images/anyplace.jpeg" alt="service 1" className="image" />
        </div>
        <div className="image-wrapper">
          <img src="./Images/anytime.jpeg" alt="service 2" className="image" />
        </div>
        <div className="image-wrapper">
          <img src="./Images/anyway.png" alt="service 3" className="image" />
        </div>
      </div>
    </div>
  );
};

export default MeetYourMechanic;
