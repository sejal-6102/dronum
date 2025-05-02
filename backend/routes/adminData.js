const express = require('express');
const verifyToken = require('../middleware/authMiddleware'); // Import the middleware
const Booking = require('../models/bookNow'); // Adjust path if needed
const Contact = require('../models/contact');   // Adjust path if needed
const Enroll = require('../models/enroll');     // Adjust path if needed

const router = express.Router();

// --- Apply the middleware to ALL routes in this file ---
router.use(verifyToken); // IMPORTANT: This protects all routes below

// GET /api/dashboard/bookings - Fetch all bookings
router.get('/bookings', async (req, res) => {
  try {
    // req.admin is available here because verifyToken added it
    console.log(`Fetching bookings for admin: ${req.admin.username}`);
    const bookings = await Booking.find({});
    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).send('Server Error');
  }
});

// GET /api/dashboard/contacts - Fetch all contacts
router.get('/contacts', async (req, res) => {
  try {
    console.log(`Fetching contacts for admin: ${req.admin.username}`);
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).send('Server Error');
  }
});

// GET /api/dashboard/enroll - Fetch all enrollments
router.get('/enroll', async (req, res) => {
  try {
    console.log(`Fetching enrollments for admin: ${req.admin.username}`);
    const enrollments = await Enroll.find({});
    res.json(enrollments);
  } catch (err) {
    console.error("Error fetching enrollments:", err);
    res.status(500).send('Server Error');
  }
});

// GET /api/dashboard/all - Fetch all data (alternative)
router.get('/all', async (req, res) => {
    try {
        console.log(`Fetching all data for admin: ${req.admin.username}`);
        const [bookings, contacts, enrollments] = await Promise.all([
            Booking.find({}),
            Contact.find({}),
            Enroll.find({})
        ]);
        res.json({ bookings, contacts, enrollments });
    } catch (err) {
        console.error("Error fetching all admin data:", err);
        res.status(500).send('Server Error');
    }
});


module.exports = router;