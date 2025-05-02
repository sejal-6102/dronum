import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend base URL
});

// Request Interceptor: Add token to headers for protected routes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    // Add token ONLY if it exists AND if the URL is for the dashboard
    if (token && config.url.startsWith('/dashboard')) { // Adjust condition if needed
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle global 401 errors (optional but good)
api.interceptors.response.use(
  (response) => response, // Simply return successful responses
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token is invalid or expired
      console.error("Axios Interceptor: Received 401 Unauthorized. Logging out.");
      localStorage.removeItem('adminToken'); // Remove bad token
      // Redirect to login page - Use your router's method
      // Example: window.location.href = '/admin/login';
      alert('Your session has expired. Please log in again.'); // Simple alert
    }
    return Promise.reject(error); // Reject the promise for component-level handling
  }
);


export default api;