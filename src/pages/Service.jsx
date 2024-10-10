import React, { useState } from 'react';
import { FaSearch, FaCar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import FooterContent from '../components/FooterContent';

// Services data
const services = [
  { name: "Oil Change", img: "/Images/oilChnage.jpg" },
  { name: "Brake Repair", img: "/Images/brake.jpg" },
  { name: "Tire Replacement", img: "/Images/tire.jpeg" },
  { name: "Battery Check", img: "/Images/battery.png" },
  { name: "Engine Repair", img: "/Images/reapir.jpeg" },
  { name: "Car Wash", img: "/Images/car.jpg" },
  { name: "Alignment", img: "/Images/allig.jpeg" },
];

const Service = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar/>
      

      {/* Header */}
      <div className="flex justify-between items-center p-5 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold flex items-center">
          <FaCar className="mr-2 text-yellow-400" /> Automotive Services
        </h1>

        {/* Conditionally render search bar */}
        {showSearch && (
          <input
            type="text"
            placeholder="Search automotive services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/3 p-2 rounded border border-gray-300"
          />
        )}
        <FaSearch
          className="text-2xl cursor-pointer hover:text-yellow-400"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {filteredServices.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <img src={service.img} alt={service.name} className="w-full h-48 object-cover rounded-md" />
          </div>
        ))}
      </div>

      <FooterContent/>
    </div>
  );
};

export default Service;
