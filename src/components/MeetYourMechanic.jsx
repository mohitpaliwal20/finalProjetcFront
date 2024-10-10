import React from 'react';

const MeetYourMechanic = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg gap-5 animate-fadeIn">
      <div className="flex-1 pr-5 max-w-[50%] text-justify">
        <h1 className="text-3xl font-bold text-gray-800 mb-5 text-center animate-slideInFromLeft">
          Meet Your Anywhere Mechanic
        </h1>
        <p className="text-lg text-gray-600 leading-8 animate-slideInFromLeft">
          Imagine having a highly skilled mechanic ready to assist you, no matter where you are—that’s the power of our Anywhere Mechanic service. Our Anywhere Mechanics are dedicated professionals who bring their expertise directly to you, ensuring your vehicle gets the care it needs without the hassle of a traditional shop visit. Not only can you book a mechanic to come to your location, but you can also browse and purchase high-quality parts through our platform. For mechanics, this is a unique opportunity to expand your business by accessing a wide range of job opportunities and connecting with customers who need your skills. Whether you're at home, at work, or stranded on the road, our Anywhere Mechanics are just a call away, delivering exceptional service and convenience right where you need it. Experience automotive care redefined with our commitment to reliability, efficiency, and top-notch service, wherever life takes you.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 animate-fadeIn">
        <div className="flex justify-center items-center border-4 border-gray-300 rounded-full p-3 bg-white transition-transform transform hover:scale-110 hover:shadow-lg">
          <img src="./Images/anyplace.jpeg" alt="service 1" className="w-36 h-36 rounded-full object-cover shadow-md" />
        </div>
        <div className="flex justify-center items-center border-4 border-gray-300 rounded-full p-3 bg-white transition-transform transform hover:scale-110 hover:shadow-lg">
          <img src="./Images/anytime.jpeg" alt="service 2" className="w-36 h-36 rounded-full object-cover shadow-md" />
        </div>
        <div className="flex justify-center items-center border-4 border-gray-300 rounded-full p-3 bg-white transition-transform transform hover:scale-110 hover:shadow-lg">
          <img src="./Images/anyway.png" alt="service 3" className="w-36 h-36 rounded-full object-cover shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default MeetYourMechanic;
