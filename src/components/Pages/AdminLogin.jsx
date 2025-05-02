import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig'; // Import your configured Axios instance

// Basic styling (optional, replace with your own CSS or UI library)
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center', // Center align content
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left', // Align labels/inputs left
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%', // Make input take full width of container
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box', // Include padding and border in element's total width
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Optional: for loading indicator
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous errors
    setLoading(true);

    if (!username || !password) {
        setError('Please enter both username and password.');
        setLoading(false);
        return;
    }

    try {
      console.log('Attempting admin login for:', username);
      // Make POST request to the backend login route
      const response = await api.post('/admin/login', { username, password });

      // Assuming the backend sends back { token: '...' } on success
      if (response.data && response.data.token) {
        console.log('Login successful, token received.');
        // Store the token in localStorage
        localStorage.setItem('adminToken', response.data.token);

        // Redirect to the admin dashboard
        console.log('Redirecting to /admin/dashboard');
        navigate('/admin/dashboard');
      } else {
         // Should not happen if backend is correct, but good to handle
         console.error('Login response did not contain token:', response.data);
         setError('Login failed. Unexpected response from server.');
      }

    } catch (err) {
      console.error('Admin login error:', err);
      setLoading(false); // Stop loading on error

      if (err.response) {
        // Server responded with a status code outside 2xx range
        if (err.response.status === 401) {
          setError('Invalid username or password.'); // User-friendly message
        } else {
           setError(`Login failed: ${err.response.data.message || 'Server error'}`);
        }
      } else if (err.request) {
        // The request was made but no response was received
        setError('Login failed: No response from server. Is it running?');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Login failed: ${err.message}`);
      }
    }
     // setLoading(false); // Moved inside catch/try blocks
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;