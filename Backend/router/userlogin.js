const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { name, age, email, phoneNumber, status, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      age,
      email,
      phoneNumber,
      status,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Generate JWT token and send it in the response
    const token = newUser.generateAuthToken();
    res.status(201).json({
      message: 'User signed up successfully',
      user: newUser,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sign-up failed' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  console.log("Enters Login server");
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found.");
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the provided password matches the user's hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Password Mismatch");
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token and send it in the response
    const token = user.generateAuthToken();
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
