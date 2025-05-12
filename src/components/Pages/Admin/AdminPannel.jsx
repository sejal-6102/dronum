// // src/components/Admin/AdminPannel.js (Assuming this path)
// import React, { useState } from "react";
// import Login from "./Login"; // Corrected import name
// import Dashboard from "./Dashboard";
// // Optional: Import useNavigate if you want to redirect after logout
// // import { useNavigate } from "react-router-dom";

// const AdminPannel = () => {
//   // Initialize state based on the presence of 'adminToken'
//   const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
//   // const navigate = useNavigate(); // Initialize if using navigate

//   // This function will be called by the Login component upon success
//   const handleLogin = () => {
//     console.log("AdminPannel: Login successful, updating state.");
//     setLoggedIn(true);
//   };

//   // Optional: Add a logout handler
//   const handleLogout = () => {
//     console.log("AdminPannel: Logging out.");
//     localStorage.removeItem("adminToken"); // Clear the token
//     setLoggedIn(false); // Update state
//     // Optional: Redirect to login page or home page after logout
//     // navigate('/admin-login'); // Or '/'
//   };

//   return (
//     <div>
//       {/*
//         Conditionally render Dashboard or Login based on loggedIn state.
//         Pass handleLogin to Login component.
//         Optionally pass handleLogout to Dashboard component if you add a logout button there.
//       */}
//       {loggedIn ? (
//         // Pass handleLogout to Dashboard if it has a logout button
//         <Dashboard /* onLogout={handleLogout} */ />
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default AdminPannel;



// frontend/src/components/Pages/Admin/AdminPannel.jsx
import React,{useState} from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { contentSchemas } from './contentSchemas'; // Path check karein

// --- Inline Styles Object ---
const styles = {
  adminLayout: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f4f7f6',
  },
  sidebar: {
    width: '260px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '25px 15px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '3px 0 6px rgba(0, 0, 0, 0.15)',
    transition: 'width 0.3s ease',
  },
  sidebarTitle: {
    fontSize: '1.6em',
    color: '#ffffff',
    marginTop: '0',
    marginBottom: '35px',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  navList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    flexGrow: '1',
  },
  navItem: {
    marginBottom: '10px',
  },
  navLinkBase: { // Base style for links
    display: 'flex',
    alignItems: 'center',
    padding: '12px 18px',
    textDecoration: 'none',
    color: '#bdc3c7',
    borderRadius: '5px',
    transition: 'background-color 0.25s ease-in-out, color 0.25s ease-in-out',
    fontSize: '1em',
  },
  navLinkActive: { // Style for active links (merge with base)
    backgroundColor: '#3498db',
    color: '#ffffff',
    fontWeight: '500',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  // For hover, you might need to handle it with onMouseEnter/onMouseLeave state
  // or use a CSS-in-JS library that supports pseudo-classes.
  // For simplicity, I'll skip direct hover inline style here.
  navSectionHeader: {
    fontWeight: 'bold',
    color: '#7f8c8d',
    marginTop: '25px',
    marginBottom: '12px',
    paddingLeft: '18px',
    fontSize: '0.85em',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  navSectionHeaderFirst: { // For the first header to remove extra top margin
    marginTop: '0',
  },
  logoutSection: {
    marginTop: 'auto',
    paddingTop: '25px',
    borderTop: '1px solid #34495e',
  },
  logoutButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.05em',
    fontWeight: '500',
    textAlign: 'center',
    transition: 'background-color 0.2s ease',
  },
  mainContentArea: {
    flex: '1',
    padding: '30px',
    overflowY: 'auto',
    backgroundColor: '#ffffff',
  }
};

// Sidebar Component using inline styles
const AdminSidebar = ({ navLinks, onLogout }) => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null); // For hover effect

  return (
    <nav style={styles.sidebar}>
      <h2 style={styles.sidebarTitle}>DRONUM ADMIN</h2>
      <ul style={styles.navList}>
        {navLinks.map((link, index) => {
          if (link.type === 'header') {
            return (
              <li
                key={`header-${index}`}
                style={{
                  ...styles.navSectionHeader,
                  ...(index === 0 || (navLinks[index-1] && navLinks[index-1].type !== 'header') ? styles.navSectionHeaderFirst : {}) // Apply first header style conditionally
                }}
              >
                {link.label}
              </li>
            );
          }

          const isActive = location.pathname === link.path ||
                           (link.path !== '/admin/dashboard' && link.path && location.pathname.startsWith(link.path));
          const linkStyle = {
            ...styles.navLinkBase,
            ...(isActive ? styles.navLinkActive : {}),
            ...(hoveredLink === link.path && !isActive ? { backgroundColor: '#34495e', color: '#ffffff' } : {}) // Hover style
          };

          return (
            <li key={link.path || `link-${index}`} style={styles.navItem}>
              <Link
                to={link.path}
                style={linkStyle}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div style={styles.logoutSection}>
        <button
          onClick={onLogout}
          style={styles.logoutButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0392b'} // Hover for button
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e74c3c'}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

function AdminPannel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const navigationLinks = [
    { label: 'Dashboard (Data)', path: '/admin/dashboard' },
     { label: 'Manage Blog Posts', path: '/admin/manage-blogs' },
  ];

  navigationLinks.push({ type: 'header', label: 'Manage Website Content' });

  Object.values(contentSchemas).forEach(schema => {
    if (schema.adminEditorPath && schema.label) {
      navigationLinks.push({
        label: `${schema.label}`,
        path: schema.adminEditorPath,
      });
    }
  });

  return (
    <div style={styles.adminLayout}>
      <AdminSidebar navLinks={navigationLinks} onLogout={handleLogout} />
      <main style={styles.mainContentArea}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminPannel;