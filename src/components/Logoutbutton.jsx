import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation dialog
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      // Remove the token from localStorage
      localStorage.removeItem("token");

      // Redirect to the home page
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-gray-800 text-lg font-extrabold transition-colors duration-300 hover:text-gray-700 hover:font-bold"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
