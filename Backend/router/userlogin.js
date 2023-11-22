const express = require('express')
const router= express.Router();

const mongoose = require ('mongoose')

const User = require('../models/userSchema')

// POST request for user sign-up
router.post('/signup', async (req, res) => {
    try {
      const { name, age, email, phoneNumber, status, password } = req.body;
  
      // Check if the user already exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
      }
  
      // Create a new user
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        age,
        name,
        email,
        phoneNumber,
        status,
        password,
      });
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      // Respond with success message and user data
      res.status(201).json({
        message: 'User signed up successfully',
        user: savedUser,
      });
    } catch (error) {
      // Handle any errors that occur during sign-up
      console.log(error);
      res.status(500).json({ error: 'Sign-up failed' });
    }
  });

// POST request for user login
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the provided password matches the user's password
      
      if (password!=user.password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Respond with success message and user data
      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
      console.log("Successful");
    } catch (error) {
      // Handle any errors that occur during login
      console.log(error)
      res.status(500).json({ error: 'Login failed' });
    }
  });
  module.exports = router;