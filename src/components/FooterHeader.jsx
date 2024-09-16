import React from 'react';
import './FooterHeader.css';  

const FooterHeader = () => {
  return (
    <div className="footer-header">
      <p>HEARD ENOUGH?</p>
      <h1>Join Us Now</h1>
      <a href="/register" className="register-button">
        <div className="register-circle">Sign Up</div>
      </a>
    </div>
  );
};

export default FooterHeader;
