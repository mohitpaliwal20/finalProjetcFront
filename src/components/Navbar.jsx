import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <i class="fas fa-tools"></i>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="/Store">Store</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#" class="cart-icon"><i class="fas fa-shopping-cart"></i></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
