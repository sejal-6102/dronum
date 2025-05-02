const mongoose = require("mongoose");

const bookNowSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  drone: String,
});
module.exports = mongoose.models['drone-booking'] || mongoose.model("drone-booking", bookNowSchema);
