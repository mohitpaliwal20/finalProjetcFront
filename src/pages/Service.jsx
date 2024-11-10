import React, { useState } from "react";
import { FaSearch, FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterContent from "../components/FooterContent";

const services = [
  { name: "Oil Change", img: "/Images/oilChnage.jpg" },
  { name: "Brake Repair", img: "/Images/brake.jpg" },
  { name: "Tire Replacement", img: "/Images/tire.jpeg" },
  { name: "Battery Check", img: "/Images/battery.png" },
  { name: "Engine Repair", img: "/Images/reapir.jpeg" },
  { name: "Vehicle Wash", img: "/Images/car.jpg" },
  { name: "Alignment", img: "/Images/allig.jpeg" },
];

const Service = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [tier, setTier] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [servic, setServic] = useState("");
  const navigate = useNavigate();
  const servicee = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, City, Country",
      img: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St, City, Country",
      img: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      id: 3,
      name: "Mike Johnson",
      address: "789 Oak St, City, Country",
      img: "https://via.placeholder.com/150", // Placeholder image
    },
  ];
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleservice = (service) => {
    if (isSignedIn) {
      navigate("/signup");
    } else {
      console.log(`${service.name} added to cart`);
      setServic(service);
    }
  };

  const handleTierSelect = (selectedTier) => {
    setTier(selectedTier);
    setBrand("");
    setModel("");
    setServic("");
  };

  const motorcycleBrands = [
    { name: "Yamaha", image: "/Images/ya.jpg" },
    { name: "Honda", image: "/Images/ho.jpg" },
    { name: "Harley-Davidson", image: "/Images/har.webp" },
  ];

  const motorcycleModels = {
    Yamaha: [
      { name: "FZ", image: "/Images/fz.png" },
      { name: "R15", image: "/Images/r15.webp" },
      { name: "MT-15", image: "/Images/mt.webp" },
    ],
    Honda: [
      { name: "CBR", image: "/Images/cbr.webp" },
      { name: "Unicorn", image: "/Images/uni.webp" },
      { name: "Dio", image: "/Images/dio.webp" },
    ],
    "Harley-Davidson": [
      { name: "Iron 883", image: "/Images/ir.webp" },
      { name: "Sportster", image: "/Images/sport.webp" },
      { name: "Roadster", image: "/Images/ro.webp" },
    ],
  };
  const carBrands = [
    { name: "Toyota", image: "/Images/toyo.jpg" },
    { name: "BMW", image: "/Images/bmw.jpg" },
    { name: "Mercedes-Benz", image: "/Images/mer.jpg" },
  ];

  const carModels = {
    Toyota: [
      { name: "Corolla", image: "/Images/co.jpg" },
      { name: "Camry", image: "/Images/can.avif" },
      { name: "Fortuner", image: "/Images/for.webp" },
    ],
    BMW: [
      { name: "X5", image: "/Images/x5.jpg" },
      { name: "X7", image: "/Images/x7.jpg" },
      { name: "M3", image: "/Images/m3.webp" },
    ],
    "Mercedes-Benz": [
      { name: "E-Class", image: "/Images/e.jpg" },
      { name: "C-Class", image: "/Images/c.jpg" },
      { name: "A-Class", image: "/Images/a.avif" },
    ],
  };

  const handleBrandSelect = (selectedBrand) => {
    setBrand(selectedBrand);
    setModel("");
    setServic("");
  };

  const handleModelSelect = (selectedModel) => {
    setModel(selectedModel);
    setServic("");
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex justify-between items-center p-5 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold flex items-center">
          <FaCar className="mr-2 text-gray-200" /> Automotive Services
        </h1>
        {showSearch && (
          <input
            type="text"
            placeholder="Search automotive services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/3 p-2 rounded border border-gray-300 bg-gray-100"
          />
        )}
        <FaSearch
          className="text-2xl cursor-pointer hover:text-yellow-400"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {!isSignedIn ? (
        <div>
          <div className="w-full bg-gray-200 p-4 mb-8 rounded-lg">
            <div className="w-1/2 mx-auto flex justify-between items-center relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 rounded-full bg-gray-300">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    tier && brand && model && servic
                      ? "w-full bg-green-500"
                      : tier && brand && model
                      ? "w-4/5 bg-green-500"
                      : tier && brand
                      ? "w-3/4 bg-green-500"
                      : tier
                      ? "w-2/3 bg-green-500"
                      : "w-0"
                  }`}
                />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full text-em font-bold ${"bg-green-500"}`}
                >
                  Vehicle
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full text-em font-bold ${
                    tier ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  Brand
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full text-em font-bold ${
                    tier && brand ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  Model
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full text-em font-bold ${
                    tier && brand && model ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  Services
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full text-em font-bold ${
                    tier && brand && model && servic
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  Book
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          {!tier && (
            <div className="flex justify-center gap-8 mb-8">
              <button
                onClick={() => handleTierSelect("Tier 1")}
                className="p-4 bg-gray-200 rounded-md flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/Images/twowheeler.avif"
                  alt="Two Wheelers"
                  className="w-80 h-80 mb-2"
                />
                <span className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300">
                  Two Wheelers
                </span>
              </button>
              <button
                onClick={() => handleTierSelect("Tier 2")}
                className="p-4 bg-gray-200 rounded-md flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/Images/Four.webp"
                  alt="Four Wheelers"
                  className="w-80 h-80 mb-2"
                />
                <span className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300">
                  Four Wheelers
                </span>
              </button>
            </div>
          )}
          {tier && !brand && (
            <div className="flex justify-center gap-8 mb-8">
              {tier === "Tier 1"
                ? motorcycleBrands.map((brandItem) => (
                    <button
                      key={brandItem.name}
                      onClick={() => handleBrandSelect(brandItem.name)}
                      className="p-4 bg-gray-200 rounded-md flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                      <img
                        src={brandItem.image}
                        alt={brandItem.name}
                        className="w-40 h-40 mb-2"
                      />
                      <span className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300">
                        {brandItem.name}
                      </span>
                    </button>
                  ))
                : carBrands.map((brandItem) => (
                    <button
                      key={brandItem.name}
                      onClick={() => handleBrandSelect(brandItem.name)}
                      className="p-4 bg-gray-200 rounded-md flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                      <img
                        src={brandItem.image}
                        alt={brandItem.name}
                        className="w-40 h-40 mb-2"
                      />
                      <span className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300">
                        {brandItem.name}
                      </span>
                    </button>
                  ))}
            </div>
          )}
          {brand && !model && (
            <div className="flex justify-center gap-8 mb-8">
              {(tier === "Tier 1"
                ? motorcycleModels[brand]
                : carModels[brand]
              ).map((modelItem) => (
                <button
                  key={modelItem.name}
                  onClick={() => handleModelSelect(modelItem.name)}
                  className="p-4 bg-gray-200 rounded-md flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={modelItem.image}
                    alt={modelItem.name}
                    className="w-60 h-60 mb-2"
                  />
                  <span className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300">
                    {modelItem.name}
                  </span>
                </button>
              ))}
            </div>
          )}

          {model && !servic && (
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="w-60 p-6 border rounded-lg bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-60 h-60 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.name}
                  </h3>
                  <button
                    onClick={() => handleservice(service)}
                    className="mt-4 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    Book service
                  </button>
                </div>
              ))}
            </div>
          )}

          {servic && (
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 w-full text-center">
                Book your Mechanic
              </h1>
              {servicee.map((mechanic) => (
                <div
                  key={mechanic.id}
                  className="w-full sm:w-80 md:w-96 p-6 bg-gray-100 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={mechanic.img}
                      alt={mechanic.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Name : {mechanic.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        Address : {mechanic.address}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Booking ${mechanic.name} for your service!`);

                      window.location.href = "/";
                    }}
                    className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="w-52 p-6 border rounded-lg bg-gray-100 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <button
                onClick={() => handleservice(service)}
                className="mt-4 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Book service
              </button>
            </div>
          ))}
        </div>
      )}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FooterContent />
    </div>
  );
};

export default Service;