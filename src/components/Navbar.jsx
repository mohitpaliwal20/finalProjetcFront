import React from 'react';
import { useState , useEffect } from 'react';
import { LuUserSquare } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoutButton from './Logoutbutton';

import dashboard from "../pages/Dashboard"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ handleProceedToBuy }) => {
  // const [cart,setCart]=useState([])
  const navigate=useNavigate()
  const [isSignedIn, setIsSignedIn] = useState(false);

  // useEffect(()=>{
  //   navigate('/cart', { state: { cart } });
  // },[cart])
  

  useEffect(() => {
    // Check if token is present in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  const logout = () =>{

  }

  


  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-gray-300 to-gray-100 shadow-md h-16">
      <div className="text-2xl">
        <i className="fas fa-tools"></i>
      </div>
      <ul className="flex gap-6">
        <li><a href="/" className="text-gray-800 text-lg font-extrabold transition-colors duration-300 hover:text-gray-700 hover:font-bold">Home</a></li>
        <li><a href="/service" className="text-gray-800 text-lg font-extrabold transition-colors duration-300 hover:text-gray-700 hover:font-bold">Service</a></li>
        <li><a href="/Store" className="text-gray-800 text-lg font-extrabold transition-colors duration-300 hover:text-gray-700 hover:font-bold">Store</a></li>
        {isSignedIn ? (
          <>
            <LogoutButton/>
            <Link to="/cart">
            <button 
              onClick={handleProceedToBuy} 
              className="text-gray-800 transition-transform duration-300 hover:scale-110"
            >
              <i className="fas fa-shopping-cart text-xl"></i> 
            </button>
            </Link>
            <Link to="/dashboard">
            <button 
            className='text-gray-800 text-2xl  transition-transform duration-300 hover:scale-110'>
              <LuUserSquare />
            </button>
            </Link>
            
          </>
        ) : (
          <>
            <li><a href="/Login" className="text-gray-800 text-lg font-extrabold transition-colors duration-300 hover:text-gray-700 hover:font-bold">Login</a></li>
            <li><a href="/Signup" className="text-gray-800 text-lg font-extrabold transition-colors duration-300 hover:text-gray-700 hover:font-bold">Sign Up</a></li>
          </>
        )}
        
      </ul>
    </nav>
  );
};

export default Navbar;
