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

  app.post('/register', (req, res) => {
    //  This is a Mongoose model method that creates and saves a new document to the database. 
    CustomerModel.create(req.body)
    .then(customers=> res.json(customers))
    .catch(err=> res.json(err))
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running`);
});


