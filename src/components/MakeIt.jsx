import React from 'react';
import Step from './Step';
import Arrow from './Arrow';
import './MakeIt.css';

const MakeIt = () => {
  return (
    <div className="how-we-make-it-happen-section">
      <h1 className="title">How We Work?</h1>
      <div className="how-we-make-it-happen">
        <Step
          title="01"
          description="Register"
          image="./Images/register.png"
        />
        <Arrow />
        <Step
          title="02"
          description="Access job opportunities"
          image="./Images/book.jpg"
        />
        <Arrow />
        <Step
          title="03"
          description="Provide service"
          image="./Images/service.png"
        />
        <Arrow />
        <Step
          title="04"
          description="Grow your business"
          image="./Images/growth.png"
        />
      </div>
    </div>
  );
};

export default MakeIt;
