const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  course: String,
});
module.exports = mongoose.models.enroll || mongoose.model("enroll", enrollSchema);
