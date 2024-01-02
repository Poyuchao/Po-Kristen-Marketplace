const express = require('express');
const mongoose = require('mongoose');
const CustomerModel = require('./Model/user');
const nodemailer=require('nodemailer');
const cors = require('cors'); // Add this
const app = express();


app.use(cors()); // Use the CORS middleware
app.use(express.json()); // Middleware to parse JSON requests

// connect to mongoDB database
// mongoose.connect('mongodb://127.0.0.1:27017/Customer')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(error => {
//     console.error('Could not connect to MongoDB', error);
//   });

// MongoDB Atlas connection 



mongoose.connect("mongodb+srv://jiayuhsu8240:A1671821@cluster0.1xozqhw.mongodb.net/Customers?retryWrites=true&w=majority",
{useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => {
    console.error('Could not connect to MongoDB Atlas', error);
  });





 {/**below functions handle users updating cart requests */}
 // GET request to fetch a user's cart
app.get('/api/cart', async (req, res) => {
  const username = req.query.username; // Get the username from query parameters
  try {
      // Find the user by their username
      const user = await CustomerModel.findOne({ username: username });

      if (!user) {
          // If no user is found, send a 404 response
          return res.status(404).json({ message: 'User not found' });
      }

      // Respond with the user's cart data
      res.status(200).json(user.cart);
  } catch (error) {
      // Handle potential errors
      console.error('Error fetching user cart:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});


  // Add item to user's cart
  app.post('/api/cart/add', async (req, res) => {
    const { username, product } = req.body;
    // console.log(username,product);
    try {
        const user = await CustomerModel.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the product already exists in the cart
        const productIndex = user.cart.findIndex(item => item.id === product.id);
        if (productIndex !== -1) {
            // Update quantity if product exists
            user.cart[productIndex].quantity += 1; // Or any specific logic for quantity
        } else {
            // Add new product to the cart
            user.cart.push({ ...product, quantity: 1 }); // Adjust according to your schema
        }

        await user.save();
        res.status(200).json({ message: "Product added to cart", cart: user.cart });
       
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

  // handle login user increase quantity
  app.post('/api/cart/increaseQuantity', async (req, res) => {
    const { username, productName } = req.body;

    try {
        const user = await CustomerModel.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find the product in the user's cart and increase the quantity
        const product = user.cart.find(item => item.productName === productName);
        if (product) {
            product.quantity += 1;
        }

        await user.save();
        res.status(200).json(user.cart);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
  });

    // POST request to decrease quantity of a product in the cart
    app.post('/api/cart/decreaseQuantity', async (req, res) => {
      const { username, productName } = req.body;

      try {
          // Find user by username
          const user = await CustomerModel.findOne({ username: username });
          if (!user) {
              return res.status(404).json({ message: 'User not found' });
          }

          // Find the product in the user's cart
        const productIndex = user.cart.findIndex(item => item.productName === productName);
        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        // Decrease the quantity, but not below 1
        if (user.cart[productIndex].quantity > 1) {
            user.cart[productIndex].quantity -= 1;
        } else {
            // Optionally, remove the item if its quantity goes to 0
            user.cart.splice(productIndex, 1);
        }

        await user.save();
        res.status(200).json({ message: 'Quantity decreased', cart: user.cart });
    } catch (error) {
        console.error('Error in decreasing quantity:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  });

  // POST request to remove a product from the cart
  app.post('/api/cart/remove', async (req, res) => {
  const { username, productName } = req.body;

  try {
      const user = await CustomerModel.findOne({ username: username });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Remove the product from the cart
      user.cart = user.cart.filter(item => item.productName !== productName);
      await user.save();

      res.status(200).json({ message: 'Product removed from cart', cart: user.cart });
  } catch (error) {
      console.error('Error removing product from cart:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// post request to reset product from cart 
app.post('/api/cart/resetCart', async (req, res) => {
  const { username } = req.body;

  try {
      const user = await CustomerModel.findOne({ username: username });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Reset the cart
      user.cart = [];
      await user.save();

      res.status(200).json({ message: 'Cart reset successfully' });
  } catch (error) {
      console.error('Error resetting cart:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to save the cart
app.post('/api/cart/save', async (req, res) => {
  const { username, cart } = req.body;

  try {
      const user = await CustomerModel.findOne({ username });
      if (!user) {
          return res.status(404).send('User not found');
      }

      user.cart = cart;
      await user.save();

      res.status(200).send('Cart saved successfully');
  } catch (error) {
      res.status(500).send('Internal Server Error');
  }
});



  {/**below functions handle users login, register, reset password requests*/}
  // handle user login request 
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

  // handle user verification code request. 
  app.post('/ForgetPassword', async(req,res)=>{
      const {email} = req.body; // Adjusted to match the frontend
      console.log(email);
      // generate four digits code 
      const codeGenerator = () => {
        return Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit code
      };
      try {
         const user = await CustomerModel.findOne({email: email })
        
          if (!user) {
             return res.status(404).json({message: "Sorry! We can't find your email!"});
          }
          // if find user email, randomly create four digits code send to the user mail account
          const verificationCode = codeGenerator(); 
          user.passwordResetCode= verificationCode;
          const userName = user.username 
          console.log(userName)
          console.log(user.passwordResetCode);
          user.resetCodeExpires = Date.now() + (10 * 60 * 1000); // after 10 minutes the verification code will be expired 
          await user.save();
          // Setup Nodemailer and send the email
          // create a transporter object that can send emails using SMTP (Simple Mail Transfer Protocol). 
          let transporter = nodemailer.createTransport({
            service: 'gmail', // Email service provider
            auth: {
                user: 'killyen444@gmail.com', // Your email address
                pass: 'wifm wgnd ggfn mirs' // Your email account password or App Password
            }
          });
          // ... (Nodemailer setup and sendMail call)
          let mailOptions = {
            from: '"Taiwan Good Stuff" <killyen444@gmail.com>', // Sender address
            to: email, // Recipient email, which is the user's email
            subject: 'Password Reset Verification Code', // Subject line
            // Plain text body using backticks and ${variable}
            text: `Hi ${userName}, your password verification code is: ${verificationCode}`, 
            // HTML body using backticks and ${variable}
            html: `<p><strong>Hi ${userName}</strong>,<br>Your password verification code is: <strong>${verificationCode}</strong>, please enter the code to reset your password.</p>` 
        };
        

          // Send the email
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ message: 'Error sending verification email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Verification email sent' });
            }
          });

      }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    } 
  });
  
  //handle user password reset 
  app.post('/reset',async(req,res)=>{
    const {verificationCode, newPassword } = req.body;
    try {
       // Find the user with the given verification code 
       //"Find me the first user in the database whose passwordResetCode matches the given verificationCode
       // and whose resetCodeExpires time is still in the future (i.e., the code hasn't expired yet)."
       const user = await CustomerModel.findOne({ passwordResetCode: verificationCode, resetCodeExpires: { $gt: Date.now() } });

       if (!user){
        // Verification code is incorrect or expired
         return res.status(400).json({message: "Invalid or expired verification code" });
        }
         // Update the user's password without hashing
         user.password = newPassword;
         user.passwordResetCode = null; // clear the verification code
         user.resetCodeExpires = undefined // clear the expiry time 
         await user.save();

         // send a success response 
         res.status(200).json({message: 'Password has been reset successfully'});
       }catch (error) {
        console.error('Error in password reset:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // handle user register request
  app.post('/register', async (req, res) => {
    const { username, email } = req.body;
  
    try {
        // Check if the username already exists in the database
        const existingUser = await CustomerModel.findOne({ username: username });

        if (existingUser) {
            // If a user with the username already exists, return a conflict response
            console.log('Username already exists:', username);
            return res.status(409).json({ message: 'Username already exists' });
        }

        // Check if the email already exists in the database
        const existingMail = await CustomerModel.findOne({ email: email });
        if (existingMail) {
            // If an email already exists, return a conflict response
            console.log('Email already exists:', email);
            return res.status(409).json({ message: 'Email already exists' });
        }

        // No user exists with this username or email, so create a new user
        const newUser = await CustomerModel.create(req.body);
        console.log('User created successfully:', newUser);
        res.status(201).json(newUser);
      
    } catch (err) {
        console.error('Error during registration process:', err);
        res.status(500).json({ message: 'Error during registration process' });
    }
});





app.get("/getUserData", async (req, res) => {
  try {
    const usercart = await CustomerModel.find().select('username cart -_id'); // Fetch username and cart
    res.json(usercart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running`);
});

// const PORT = 3001;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server is running on port ${PORT}`);
// });


