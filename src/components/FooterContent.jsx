import React from 'react';
import './FooterContent.css';  

const FooterContent = () => {
  return (
    <div className="footer-content">
      <div className="footer-left">
        <p>ANYWHERE MECHANIC®</p>
        <div className="office-details">
          <div className="location">
            <strong>BHOPAL</strong>
            <p>+91 20 7388 7591</p>
            <p>Unit 30, Metropolitan Wharf,<br />Bhopal</p>
            <a href="#">See on map →</a>
          </div>
          <div className="location">
            <strong>INDORE</strong>
            <p>+91 9 11 6774 7644</p>
            <p>Cabrera 5884 1st floor,<br />Indore</p>
            <a href="#">See on map →</a>
          </div>
        </div>
      </div>

      <div className="footer-extra">
        <p>WANT TO BE THE SMARTEST MECHANIC?</p>
        <a href="#">SIGN UP FOR AQURING SERVICES →</a>
        <p>CONTACT US:</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
