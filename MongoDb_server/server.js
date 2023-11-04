const express = require('express');
const mongoose = require('mongoose');
const CustomerModel = require('./Model/user');
const cors = require('cors'); // Add this
const app = express();


app.use(cors()); // Use the CORS middleware
app.use(express.json()); // Middleware to parse JSON requests

// connect to mongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/Customer')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Could not connect to MongoDB', error);
  });
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the customer by username
      const user = await CustomerModel.findOne({ username: username });
      console.log(user)
      if (!user) {
        // No user found
        console.log('User not found:', username);
        return res.status(401).json({ message: "User not found" });
      }
  
      // Check if the passwords match
      if (user.password === password) {
        // Passwords match, return success message
        console.log('User authenticated successfully:', username);
        return res.status(200).json({ message: "Success" });
      } else {
        // Passwords do not match, return error message
        console.log('Incorrect password for user:', username);
        return res.status(401).json({ message: "The password is incorrect" });
      }
  
    } catch (err) {
      // Handle any errors during the process
      console.error('Error during login process:', err);
      return res.status(500).json({ message: "An error occurred" });
    }
  });
  
  app.post('/register', async (req, res) => {
    const { username } = req.body;
  
    try {
      // Check if the username already exists in the database
      const existingUser = await CustomerModel.findOne({ username: username });
  
      if (existingUser) {
        // If a user with the username already exists, return a conflict response
        console.log('Username already exists:', username);
        res.status(409).json({ message: 'Username already exists' });
      } else {
        // No user exists with this username, so create a new user
        const newUser = await CustomerModel.create(req.body);
        // New user created successfully, return the user data
        console.log('User created successfully:', newUser);
        res.status(201).json(newUser);
      }
    } catch (err) {
      // If there's an error during the operation, return an error response
      console.error('Error during registration process:', err);
      res.status(500).json({ message: 'Error during registration process' });
    }
  });



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running`);
});


