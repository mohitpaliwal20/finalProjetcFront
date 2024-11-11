import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import UserDashboard from '../components/UserDashboard';  
import MechanicDashboard from '../components/MechanicDashboard'; 

function UserProfile() {
  const navigate = useNavigate();  
  
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn');
    const userRole = localStorage.getItem('role');

    if (userStatus === 'true') {
      setIsLoggedIn(true);
      setRole(userRole); 
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null; 
  }

  return (
    <div>
      {role === 'user' ? <UserDashboard /> : <MechanicDashboard />}
    </div>
  );
}

export default UserProfile;
