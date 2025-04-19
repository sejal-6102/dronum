const express = require("express");
const router = express.Router();
const Enroll = require("../models/enroll");

router.post("/", async (req, res) => {
  try {
    const newEnroll = new Enroll(req.body);
    await newEnroll.save();
    res.status(201).json({ message: "Enrollment successful!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
