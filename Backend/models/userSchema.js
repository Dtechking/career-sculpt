const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  email: String,
  phoneNumber: String,
  Status: String,
  password: String,
});

module.exports = mongoose.model("User",userSchema);
