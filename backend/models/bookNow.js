const mongoose = require("mongoose");

const bookNowSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
});

module.exports = mongoose.model("drone-booking", bookNowSchema);
