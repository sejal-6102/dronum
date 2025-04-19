const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  message: String,
});

module.exports = mongoose.model("Contact", contactSchema);
