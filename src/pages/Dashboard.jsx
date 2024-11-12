import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import UserDashboard from '../components/UserDashboard';  
import MechanicDashboard from '../components/MechanicDashboard'; 
import { useSelector } from 'react-redux';

function UserProfile() {
  const navigate = useNavigate();  
  
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [role, setRole] = useState('');

  // useEffect(() => {
  //   const userStatus = localStorage.getItem('isLoggedIn');
  //   const userRole = localStorage.getItem('role');

  //   if (userStatus === 'true') {
  //     setIsLoggedIn(true);
  //     setRole(userRole); 
  //   } else {
  //     navigate('/login'); 
  //   }
  // }, [navigate]);

  if (!token) {
    return null; 
  }
  console.log( user.user_type)
  return (
    <div>
      {role === user.user_type ? <UserDashboard /> : <MechanicDashboard />}
    </div>
  );
}

export default UserProfile;