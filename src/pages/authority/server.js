const express = require('express');
const mongoose = require('mongoose');
const User = require('./Model/user');
const cors = require('cors'); // Add this
const app = express();

app.use(cors()); // Use the CORS middleware
app.use(express.json()); // Middleware to parse JSON requests

mongoose.connect('mongodb://localhost:27017/userDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Could not connect to MongoDB', error);
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message }); // Updated this line
  }
});
