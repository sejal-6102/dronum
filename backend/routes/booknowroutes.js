const express = require("express");
const router = express.Router();
const BookNow = require("../models/bookNow");

router.post("/", async (req, res) => {
  try {
    const newBooking = new BookNow(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking successful!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
