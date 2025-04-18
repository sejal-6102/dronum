// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const enrollRoutes = require("./routes/enrollroutes");
const bookRoutes = require("./routes/booknowroutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// API routes
app.use("/api/enroll", enrollRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/contact", contactRoutes);

// 👇 DO NOT USE app.listen() on Vercel
module.exports = app;
