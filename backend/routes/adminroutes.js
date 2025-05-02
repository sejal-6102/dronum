const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

const adminUsername = 'admin';
const adminPassword = '1234';

router.post('/login', (req, res) => {
  const { userName, password } = req.body;
  if (userName === adminUsername && password === adminPassword) {
    req.session.admin = true;
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

router.get('/data', async (req, res) => {
  if (!req.session.admin) return res.status(403).json({ error: 'Unauthorized' });
  const data = await Booking.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
