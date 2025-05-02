const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require("../models/admin"); // Import the Admin model
require('dotenv').config(); // Make sure JWT_SECRET is in your .env file

const router = express.Router();

// --- IMPORTANT: Create an Admin User (Run this logic ONCE manually or via a script) ---
// This is just an example. Do this securely, perhaps via a setup script.
router.post('/register-initial-admin', async (req, res) => {
   try {
       const { username, password } = req.body; // Get from request for setup
       const existingAdmin = await Admin.findOne({ username });
       if (existingAdmin) {
           return res.status(400).send('Admin already exists');
       }
       const admin = new Admin({ username, password });
       await admin.save();
       res.status(201).send('Admin registered successfully');
   } catch (error) {
       console.error("Error registering admin:", error);
       res.status(500).send('Server error during admin registration');
   }
});
// ------------------------------------------------------------------------------

// POST /api/admin/login - Admin Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide username and password' });
  }

  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      console.log(`Login attempt failed: Admin not found for username "${username}"`);
      return res.status(401).json({ message: 'Invalid credentials' }); // Generic message
    }

    // Check if password matches
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      console.log(`Login attempt failed: Incorrect password for username "${username}"`);
      return res.status(401).json({ message: 'Invalid credentials' }); // Generic message
    }

    // --- Credentials are valid ---
    console.log(`Admin "${username}" logged in successfully.`);

    // Create JWT Payload
    const payload = {
      admin: {
        id: admin.id, // Include admin ID or username if needed later
        username: admin.username
      }
    };

    // Sign the token
    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Your secret key from .env file
      { expiresIn: '1h' }, // Token expires in 1 hour (adjust as needed)
      (err, token) => {
        if (err) throw err;
        res.json({ token }); // Send the token back to the client
      }
    );

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// You might need a way to register an admin initially.
// Add a registration route here if needed, maybe protected itself.

// Export the router correctly
module.exports = { adminRouter: router }; // Ensure you export it as an object if importing like { adminRouter }
// or just: module.exports = router; if importing like: const adminRouter = require(...)