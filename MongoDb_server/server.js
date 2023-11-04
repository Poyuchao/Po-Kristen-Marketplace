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

  app.post("/login",(req,res)=>{
    // first extracts the username and password from the request body.
     const{username, password} = req.body;
     // checks the database (using a findOne query) to see if a user with the provided username exists.
     CustomerModel.findOne({username: username})
     .then(user=> {
      if (user){
        // If such a user is found and the password matches the one stored in the database,
        // it sends back a JSON response of "Success".
        if (user.password === password){
          res.json("Success")
        } else {
          res.json("the password is incorrect")
        }
      }
     })
  })
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


