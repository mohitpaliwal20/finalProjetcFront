import React from 'react';

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[500px] bg-cover bg-center text-white text-center pt-24" 
         style={{ backgroundImage: "url('./Images/herosection.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-md z-[-1]"></div>

      {/* Content */}
      <h1 className="text-4xl font-bold">Anywhere Mechanic</h1>
      <p className="text-xl mt-4 font-cursive text-gray-300">
        "Bringing trusted repair right to your doorstep, wherever you are, wherever you need."
      </p>
    </div>
  );
}

export default App;
