// frontend/src/components/Pages/Admin/ProtectedRoute.jsx
// Ya jahaan bhi aapne ProtectedRoute.jsx rakha hai, e.g., src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  const location = useLocation();

  if (!token) {
    // Redirect them to the /admin/login page, but save the current location they were
    // trying to go to so we can send them along after they login.
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children; // If token exists, render the children components (e.g., AdminPannel)
};

export default ProtectedRoute;