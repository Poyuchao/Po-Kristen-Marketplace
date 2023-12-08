const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  price: Number,
  productImg: String,
  category: String,
  quantity: Number
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Remember to hash this in a real-world application!
  gender: String,
  passwordResetCode: String, // Field to store the password reset code
  resetCodeExpires: Date, // Field to store the expiration time of the reset code
  cart: [cartItemSchema]  // field to store user shopping item 
});

const CustomerModel = mongoose.model('Customers', userSchema);

module.exports = CustomerModel;
