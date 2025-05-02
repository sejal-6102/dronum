// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken'); // Check for the token

  if (!token) {
    // If no token, redirect to the admin login page
    console.log("ProtectedRoute: No token found, redirecting to /admin/login");
    return <Navigate to="/admin/login" replace />;
  }

  // If token exists, render the child components passed to it.
  // 'children' will be the <Dashboard /> component in your case.
  // <Outlet /> is used if you nest routes further inside the protected route.
  return children ? children : <Outlet />;
};

export default ProtectedRoute;