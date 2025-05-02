// src/components/Admin/AdminPannel.js (Assuming this path)
import React, { useState } from "react";
import Login from "./Login"; // Corrected import name
import Dashboard from "./Dashboard";
// Optional: Import useNavigate if you want to redirect after logout
// import { useNavigate } from "react-router-dom";

const AdminPannel = () => {
  // Initialize state based on the presence of 'adminToken'
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
  // const navigate = useNavigate(); // Initialize if using navigate

  // This function will be called by the Login component upon success
  const handleLogin = () => {
    console.log("AdminPannel: Login successful, updating state.");
    setLoggedIn(true);
  };

  // Optional: Add a logout handler
  const handleLogout = () => {
    console.log("AdminPannel: Logging out.");
    localStorage.removeItem("adminToken"); // Clear the token
    setLoggedIn(false); // Update state
    // Optional: Redirect to login page or home page after logout
    // navigate('/admin-login'); // Or '/'
  };

  return (
    <div>
      {/*
        Conditionally render Dashboard or Login based on loggedIn state.
        Pass handleLogin to Login component.
        Optionally pass handleLogout to Dashboard component if you add a logout button there.
      */}
      {loggedIn ? (
        // Pass handleLogout to Dashboard if it has a logout button
        <Dashboard /* onLogout={handleLogout} */ />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default AdminPannel;