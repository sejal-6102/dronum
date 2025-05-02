const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const enrollRoutes = require("./routes/enrollroutes");
const bookRoutes = require("./routes/booknowroutes");
const contactRoutes = require("./routes/contactRoutes");

const { adminRouter } = require("./routes/adminAuth");
const adminDataRoutes = require("./routes/adminData");

const app = express();
// // app.use(cors());
// app.use(cors({
//   // origin: 'https://dronum.vercel.app',
//     origin: 'http://localhost:3000',   //  // <-- Frontend URL
//   methods: ['GET', 'POST'], // Add others if needed: PUT, DELETE, etc.
//   credentials: true // if using cookies or auth
// }));
// app.use(express.json());



const allowedOrigins = [
  'https://dronum.vercel.app', // Your deployed frontend URL
  'http://localhost:3000'     // Your local development frontend URL (optional, but good for testing)
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    // Or allow if the origin is in our list
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Add methods you use + OPTIONS
  credentials: true, // Keep if your app uses cookies or authorization headers
  allowedHeaders: ['Content-Type', 'Authorization'], // Explicitly allow necessary headers
}));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// API Routes
app.use("/api/enroll", enrollRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/contact", contactRoutes);


app.use("/api/admin", adminRouter);         // Login route
app.use("/api/dashboard", adminDataRoutes);

// For local testing only (skip this in Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

app.get("/check", (req, res) => {
  res.json("hello world");
});


module.exports = app;
