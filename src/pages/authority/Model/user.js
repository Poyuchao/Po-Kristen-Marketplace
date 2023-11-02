const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Remember to hash this in a real-world application!
  gender: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
