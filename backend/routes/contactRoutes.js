// const express = require("express");
const router = express.Router();

// --- FIX THIS LINE TO MATCH YOUR ACTUAL FILENAME ---
// If file is Contact.js (Uppercase C):
const Contact = require("../models/contact");
// If file is contact.js (Lowercase c):
// const Contact = require("../models/contact");
// --- END FIX ---

router.post("/", async (req, res) => {
  // Added logging from previous steps - keep this for debugging!
  console.log(`[${new Date().toISOString()}] Received POST /api/contact request`);
  console.log(`[${new Date().toISOString()}] Request Body:`, req.body);

  try {
    // Ensure Contact is defined correctly from the require above
    if (!Contact) {
        throw new Error("Contact model is not loaded correctly. Check require path/case.");
    }

    const newContact = new Contact(req.body);
    console.log(`[${new Date().toISOString()}] Attempting to save contact:`, JSON.stringify(newContact));

    await newContact.save();

    console.log(`[${new Date().toISOString()}] Contact saved successfully with ID: ${newContact._id}`);
    res.status(201).json({ message: "Contact message sent successfully!" });

  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error saving contact:`, error); // Log the full error
    res.status(500).json({ message: "Error saving contact message", error: error.message });
  }
});

module.exports = router;