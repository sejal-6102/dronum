const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Required for CORS middleware
require("dotenv").config(); // Load environment variables

// Import routes
const enrollRoutes = require("./routes/enrollroutes");
const bookRoutes = require("./routes/booknowroutes");
const contactRoutes = require("./routes/contactRoutes");
const { adminRouter } = require("./routes/adminAuth");
const adminDataRoutes = require("./routes/adminData");

const app = express();

// --- CORRECTED AND ROBUST CORS CONFIGURATION (PLACE EARLY!) ---

// Define allowed origins
const allowedOrigins = [
 'https://dronum-git-main-sejal-6102s-projects.vercel.app', // Your MAIN BRANCH PREVIEW frontend URL <--- ADDED THIS LINE
  'http://localhost:3000'                         // Your local development frontend URL (if you still use it)
];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Log the origin being checked for debugging
    console.log(`CORS Check: Request Origin = ${origin}`);
    // Allow requests with no origin (like mobile apps or curl) OR if origin is in the allowed list
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      console.log(`CORS Allowed for origin: ${origin}`);
      callback(null, true); // Allow the request
    } else {
      console.warn(`CORS Blocked for origin: ${origin}`); // Log blocked origins for debugging
      callback(new Error('This origin is not allowed by CORS policy')); // Block the request
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow standard methods + OPTIONS for preflight
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers from frontend
  credentials: true, // Allow cookies/authorization headers to be sent
  optionsSuccessStatus: 204 // Set success status for OPTIONS preflight response
};

// 1. IMPORTANT: Enable CORS Preflight Handling for ALL routes FIRST
// This handles the initial OPTIONS request sent by browsers for complex requests.
app.options('*', cors(corsOptions));
console.log("CORS preflight request handling configured for all routes (*)");

// 2. Apply CORS settings to all subsequent actual requests (GET, POST, etc.)
app.use(cors(corsOptions));
console.log("CORS middleware configured for actual requests");

// --- END CORS CONFIGURATION ---


// --- OTHER MIDDLEWARE (AFTER CORS) ---

// Middleware to parse JSON request bodies
// IMPORTANT: Place this *after* CORS middleware
app.use(express.json());
console.log("JSON body parser middleware configured");

// --- END OTHER MIDDLEWARE ---


// --- MongoDB Connection ---
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  // Log error and prevent startup if connection string is missing
  console.error("FATAL ERROR: MONGODB_URI environment variable is not set in Vercel settings.");
  // For serverless, throwing an error is better than process.exit
  throw new Error("FATAL ERROR: MONGODB_URI environment variable is not set.");
} else {
   // Log that we found the URI and are attempting connection
   console.log("MONGODB_URI found in environment variables. Attempting MongoDB connection...");
}

mongoose
  .connect(mongoURI, {
    // Mongoose v6+ defaults these correctly, useNewUrlParser/UnifiedTopology are deprecated
    serverSelectionTimeoutMS: 10000 // Increase timeout slightly (e.g., 10 seconds)
  })
  .then(() => console.log("MongoDB connected successfully!")) // Log success
  .catch((err) => {
    // Log the specific connection error for easier debugging
    console.error("MongoDB connection error:", err);
    // Optionally re-throw to ensure Vercel logs the failure clearly
    // throw err;
  });
// --- END MongoDB Connection ---


// --- API Routes (AFTER CORS and body-parser) ---
console.log("Configuring API routes...");
app.use("/api/enroll", enrollRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/contact", contactRoutes); // This route was causing CORS issues
app.use("/api/admin", adminRouter);         // Admin login route
app.use("/api/dashboard", adminDataRoutes); // Protected admin data route
console.log("API routes configured.");
// --- END API Routes ---


// --- Optional: Simple Check Route ---
// Useful for seeing if the server is running at all
app.get("/check", (req, res) => {
  console.log("GET /check route hit");
  res.status(200).json({ message: "Server is running and reachable" });
});
// --- END Check Route ---


// --- Local Development Server (Vercel ignores this) ---
// Keep this block *only* if you sometimes run this backend locally with `node server.js`
// Vercel uses the export below and ignores app.listen
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`LOCAL DEVELOPMENT Server running on port ${PORT}`);
  });
}
// --- END Local Development Server ---


// --- Export the app for Vercel ---
// This is required for Vercel Serverless Functions
console.log("Server setup complete. Exporting Express app for Vercel...");
module.exports = app;
// --- END Export ---