// 
// frontend/src/components/Pages/Admin/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Ensure this api instance points to http://localhost:5000/api
// or that you construct the full path correctly.
import api from '../../../api/axiosConfig'; // Import your configured Axios instance

// ... (styles object waise hi rahega) ...
const styles = { /* ... */ };

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!username || !password) {
        setError('Please enter both username and password.');
        setLoading(false);
        return;
    }

    try {
      console.log('Attempting admin login for:', username);
      // Make POST request to the CORRECT backend login route
      const response = await api.post('/admin/auth/login', { username, password }); // <<====== CORRECTED URL

      if (response.data && response.data.token) {
        console.log('Login successful, token received.');
        localStorage.setItem('adminToken', response.data.token);
        console.log('Redirecting to /admin/dashboard');
        navigate('/admin/dashboard');
      } else {
         console.error('Login response did not contain token:', response.data);
         setError('Login failed. Unexpected response from server.');
      }
    } catch (err) {
      console.error('Admin login error:', err);
      if (err.response) {
        if (err.response.status === 401) {
          setError('Invalid username or password.');
        } else if (err.response.status === 404) { // Specifically handle 404 from this new path
          setError('Login endpoint not found. Please check server configuration.');
        }
         else {
           setError(`Login failed: ${err.response.data.message || `Server error (Status: ${err.response.status})`}`);
        }
      } else if (err.request) {
        setError('Login failed: No response from server. Is it running?');
      } else {
        setError(`Login failed: ${err.message}`);
      }
    } finally { // Ensure loading is set to false in all cases
        setLoading(false);
    }
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