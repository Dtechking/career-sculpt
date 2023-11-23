const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  email: String,
  phoneNumber: String,
  Status: String,
  password: String,
});

  userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
      {
        _id: this._id,
        name: this.name,
        email: this.email,
      },
      'dapcareersculpt' // Replace with your secret key
    );
    return token;
  }

module.exports = mongoose.model("User", userSchema);
