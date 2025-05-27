console.log(`[ENV_DEBUG] START OF SCRIPT: process.env.PORT = ${process.env.PORT} (type: ${typeof process.env.PORT})`);
console.log(`[ENV_DEBUG] START OF SCRIPT: process.env.NODE_ENV = ${process.env.NODE_ENV}`);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Ensures .env variables are loaded if you use a .env file locally
console.log(`[ENV_DEBUG] AFTER DOTENV: process.env.PORT = ${process.env.PORT} (type: ${typeof process.env.PORT})`);
const path = require('path');

// Import your route handlers
const enrollRoutes = require("./routes/enrollroutes");
const bookRoutes = require("./routes/booknowroutes");
const contactRoutes = require("./routes/contactRoutes");
const publicContentRoutes = require('./routes/publicContentRoutes');
const adminContentRoutes = require('./routes/adminContentRoutes');
const { adminRouter } = require("./routes/adminAuth");
const adminDataRoutes = require("./routes/adminData");

const app = express();

// --- CORS Configuration ---
// Define allowed origins. Add your production frontend URL(s) here.
// It's best to get this from an environment variable in production.
const allowedOrigins = [
  'http://localhost:3000', // For local frontend development
  // Add your production frontend URL here. Example:
  // 'https://your-frontend-app.up.railway.app',
  // 'https://www.yourcustomdomain.com'
];

// If you have a FRONTEND_URL environment variable set in Railway (recommended)
if (process.env.FRONTEND_URL) {
  // If FRONTEND_URL can be a comma-separated list of URLs
  const frontendUrls = process.env.FRONTEND_URL.split(',').map(url => url.trim());
  allowedOrigins.push(...frontendUrls);
}

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests from the same machine/network)
    if (!origin) return callback(null, true);
    // Check if the origin is in our allowed list
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Common methods
  allowedHeaders: ['Content-Type', 'Authorization'],    // Common headers
  credentials: true                                     // If you use cookies or sessions
}));

// --- Middleware ---
app.use(express.json({ limit: '10mb' })); // For parsing application/json
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // For parsing application/x-www-form-urlencoded

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- MongoDB Connection ---
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("FATAL ERROR: MONGODB_URI environment variable is not set.");
  process.exit(1); // Exit if MongoDB URI is not provided
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully.");

    // --- API Routes ---
    // It's good practice to define routes after the DB connection is established,
    // especially if routes interact with the DB immediately upon definition (though rare).
    app.use("/api/enroll", enrollRoutes);
    app.use("/api/book", bookRoutes);
    app.use("/api/contact", contactRoutes);
    app.use("/api/admin/auth", adminRouter);
    app.use("/api/dashboard", adminDataRoutes);
    app.use('/api/public/content', publicContentRoutes);
    app.use('/api/admin/cms', adminContentRoutes);

    // Simple root route for health check / basic info
    app.get("/", (req, res) => {
      console.log("GET / route hit");
      res.status(200).send("Backend API is up and running!");
    });

    // Test route
    app.get("/check", (req, res) => {
      console.log("GET /check route hit");
      res.status(200).json({ message: "Server check: OK", timestamp: new Date().toISOString() });
    });
    
    app.get('/api/public/content/courses-list-for-nav', (req, res) => {
      // This route seems like it should be in publicContentRoutes.js
      // For now, keeping it here as per your original code.
      console.log('<<<< DEBUG: Direct route in server.js for /api/public/content/courses-list-for-nav HIT! >>>>');
      res.json({ message: "Direct route in server.js /api/public/content/courses-list-for-nav is working!" });
    });


      const HARDCODED_LISTENING_PORT = 5005; // <--- CHOOSE A PORT, e.g., 5005
    console.log(`[DEBUG] Intentionally ignoring process.env.PORT. Attempting to listen on hardcoded port: ${HARDCODED_LISTENING_PORT}`);

    app.listen(Number(HARDCODED_LISTENING_PORT), () => {
      console.log(`Server running on port ${HARDCODED_LISTENING_PORT}`); // This log should now show 5005
    });

  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// --- Global Error Handling (Optional but Recommended) ---
// Catch-all for unhandled errors in routes (if not handled by individual route handlers)
app.use((err, req, res, next) => {
  console.error("Unhandled application error:", err.stack || err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "An unexpected error occurred.",
    },
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
  // Consider exiting the process: process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Application specific logging, shutdown, or other logic here
  process.exit(1); // It's often recommended to exit on uncaught exceptions
});

// Export the app (useful for testing frameworks or if you have a separate server starter script,
// but for Railway, the app.listen() above is what primarily matters for this file being the entry point)
module.exports = app;