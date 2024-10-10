
import React from 'react';

function HomeCard() {
  return (
    <div className="flex justify-center items-center gap-20 p-10">
      <Card
        image="/Images/mechanicc.avif"
        title="Mechanic"
        description="Empower your craft by joining a community that values expertise and convenience."
      />
      <Card
        image="/Images/user.jpeg"
        title="User"
        description="In a world that never stops, neither should you. Access reliable help anytime, anywhere."
      />
      <Card
        image="/Images/store.jpg"
        title="Store"
        description="Empower your craft by joining a community that values expertise and convenience."
      />
    </div>
  );
}

function Card({ image, title, description }) {
  return (
    <div className="relative w-72 h-96 flex flex-col justify-center items-center bg-white/20 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-xl" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-md p-5 w-2/3 h-2/3 rounded-lg text-center flex flex-col justify-center items-center opacity-90 transition-opacity transform hover:scale-105">
        <h2 className="text-xl mb-2 font-semibold">{title}</h2>
        <p className="text-sm font-poppins">{description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
