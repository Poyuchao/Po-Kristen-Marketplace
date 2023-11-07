const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Remember to hash this in a real-world application!
  gender: String,
  passwordResetCode: String, // Field to store the password reset code
  resetCodeExpires: Date // Field to store the expiration time of the reset code
});

const CustomerModel = mongoose.model('Customers', userSchema);

module.exports = CustomerModel;
