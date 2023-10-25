const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Remember to hash this in a real-world application!
  gender: String
});

const CustomerModel = mongoose.model('Customers', userSchema);

module.exports = CustomerModel;
