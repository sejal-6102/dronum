// src/components/Admin/Login.js (Assuming this path)
import React, { useState } from 'react';
import axios from 'axios';
// Removed useNavigate as parent will handle re-render
// import { useNavigate } from 'react-router-dom';

// Accept onLogin as a prop
const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });
  const [error, setError] = useState(null);
  // const navigate = useNavigate(); // No longer needed here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log('Login form submitted');

    const { userName, password } = formData;

    if (!userName || !password) {
        setError("Username and password are required.");
        return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { userName, password });
      const token = response.data.token;

      if (token) {
        // Use the correct key 'adminToken'
        localStorage.setItem('adminToken', token);
        console.log('Token saved in localStorage:', localStorage.getItem('adminToken'));

        // IMPORTANT: Signal successful login to the parent component
        if (onLogin) {
          onLogin();
        } else {
          console.warn("onLogin prop is missing in Login component");
        }

        // Navigation is now handled by the parent component's state change
        // console.log('Login successful, parent will re-render.');
        // navigate('/admin-pannel'); // Removed - Parent handles the view switch

      } else {
         console.error("Login successful but no token received.");
         setError("Login succeeded but failed to retrieve session token.");
      }

    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="userName" style={styles.label}>Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.errorText}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};
// Optional basic inline styles for better presentation
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box', // Include padding and border in the element's total width and height
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px', // Add some space above the button
  },
  buttonHover: { // Note: Inline styles don't directly support :hover, use CSS classes or libraries for this
    backgroundColor: '#0056b3',
  },
  errorText: {
    color: 'red',
    marginTop: '-10px', // Adjust spacing
    marginBottom: '15px',
    fontSize: '14px',
  }
};


export default Login;