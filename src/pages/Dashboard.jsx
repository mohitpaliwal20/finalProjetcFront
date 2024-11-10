import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import UserDashboard from '../components/UserDashboard';  
import MechanicDashboard from '../components/MechanicDashboard'; 
import { useSelector } from "react-redux";
function Dashboard() {
  const navigate = useNavigate();  
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  if (!token) {
    return null; 
  }

  return (
    <div>
      {user.user_type === 'CUSTOMER' ? <UserDashboard /> : <MechanicDashboard />}
    </div>
  );
}

export default Dashboard;