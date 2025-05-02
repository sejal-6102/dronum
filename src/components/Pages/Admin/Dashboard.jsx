// import React, { useState, useEffect } from 'react';
// import api from "../../../api/axiosConfig"; // Import the configured Axios instance
// import { useNavigate } from 'react-router-dom'; // For redirection if needed

// function Dashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [enrollments, setEnrollments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   // const navigate = useNavigate(); // Use if interceptor doesn't handle redirect

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//          console.log("Dashboard: Fetching admin data...");
//         // Option 1: Fetch all at once
//         const response = await api.get('/dashboard/all');
//         setBookings(response.data.bookings);
//         setContacts(response.data.contacts);
//         setEnrollments(response.data.enrollments);
//          console.log("Dashboard: Data fetched successfully.");

//         // Option 2: Fetch individually (if you prefer)
//         // const [bookingsRes, contactsRes, enrollRes] = await Promise.all([
//         //   api.get('/dashboard/bookings'),
//         //   api.get('/dashboard/contacts'),
//         //   api.get('/dashboard/enroll')
//         // ]);
//         // setBookings(bookingsRes.data);
//         // setContacts(contactsRes.data);
//         // setEnrollments(enrollRes.data);

//       } catch (err) {
//          // Axios interceptor likely handles 401 already
//          if (err.response && err.response.status !== 401) {
//              console.error("Error fetching admin data:", err);
//              setError('Failed to fetch data. Please try again later.');
//          } else if (!err.response) {
//              // Network error or other issue before response
//              console.error("Network or other error fetching admin data:", err);
//              setError('Network error. Please check connection.');
//          }
//          // If the interceptor handles 401, this component might unmount
//          // before this catch block fully executes the redirect.
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Check if token exists before fetching - avoids unnecessary requests if logged out
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//         console.log("Dashboard: No token found, redirecting to login.");
//         // Redirect logic here if not handled by router/interceptor
//         // navigate('/admin/login');
//         setLoading(false); // Stop loading
//         return; // Don't fetch
//     }


//     fetchData();
//   }, []); // Add navigate to dependency array if used inside effect

//   if (loading) return <div>Loading dashboard data...</div>;
//   if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

//   // Render your dashboard with bookings, contacts, enrollments data
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <h2>Bookings</h2>
//       {/* Render bookings data */}
//       <pre>{JSON.stringify(bookings, null, 2)}</pre>

//       <h2>Contacts</h2>
//       {/* Render contacts data */}
//       <pre>{JSON.stringify(contacts, null, 2)}</pre>

//       <h2>Enrollments</h2>
//       {/* Render enrollments data */}
//       <pre>{JSON.stringify(enrollments, null, 2)}</pre>
//     </div>
//   );
// }

// export default Dashboard;



// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import api from "../../../api/axiosConfig"; // Adjust path if needed
// import { useNavigate } from 'react-router-dom'; // Keep if needed for future redirects

import Sidebar from '../../Sidebar'; // Import the new Sidebar component
import MainContent from '../../MainContent'; // Import the new MainContent component
import styles from '../../../css/Dashboard.module.css'; // Import the CSS module

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('bookings'); // 'bookings', 'contacts', or 'enrollments'

  // Data fetching useEffect (remains the same)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      // Check if token exists before fetching - avoids unnecessary requests if logged out
      const token = localStorage.getItem('adminToken');
      if (!token) {
          console.log("Dashboard: No token found, potentially redirecting...");
          // Redirect logic could be here or handled by ProtectedRoute/Interceptor
          setLoading(false); // Stop loading
          setError("Authentication required. Please log in again."); // Set an error message
          return; // Don't fetch
      }

      try {
        console.log("Dashboard: Fetching admin data...");
        const response = await api.get('/dashboard/all'); // Uses configured axios with token
        setBookings(response.data.bookings || []); // Ensure it's always an array
        setContacts(response.data.contacts || []);
        setEnrollments(response.data.enrollments || []);
        console.log("Dashboard: Data fetched successfully.");
      } catch (err) {
        if (err.response && err.response.status === 401) {
            console.error("Dashboard: Authentication error (401).", err);
            setError('Authentication error. Your session might be invalid or expired. Please log in again.');
            // Potentially clear token and redirect here if interceptor doesn't handle it
            // localStorage.removeItem('adminToken');
            // navigate('/admin/login');
        } else if (err.response) {
            console.error(`Error fetching admin data: ${err.response.status}`, err);
            setError(`Failed to fetch data (${err.response.status}). Please try again later.`);
        } else if (err.request) {
             console.error("Network or other error fetching admin data:", err);
             setError('Network error. Please check your connection and the server.');
        } else {
             console.error('Error setting up fetch request:', err);
             setError('An unexpected error occurred during setup.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run once on mount

  // Define the sections for the sidebar
  const sections = [
    { key: 'bookings', label: 'Book a Drone' },
    { key: 'contacts', label: 'Contact Enquiry' },
    { key: 'enrollments', label: 'Course Enrollment' },
  ];

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <MainContent
        activeSection={activeSection}
        data={{ bookings, contacts, enrollments }}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Dashboard;