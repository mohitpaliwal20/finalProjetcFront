import React from 'react';
import Card from './Card';
import "./HomeCard.css";
function HomeCard(){
    return (
        <>
        <div className="card-wrapper">
      <Card
        image="./Images/mechanicc.avif"
        title="Mechanic"
        description="Empower your craft by joining a community that values expertise and convenince."
      />
      <Card
        image="./Images/user.jpeg"
        title="User"
        description="In a world that never stops, neither should you. Access reliable help anytime, anywhere."
      />
      <Card
        image="./Images/store.jpg"
        title="Mechanic"
        description="Empower your craft by joining a community that values expertise and convenince."
      />
    </div>
        </>
    )
}
export default HomeCard;