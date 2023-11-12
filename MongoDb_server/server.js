const express = require('express');
const mongoose = require('mongoose');
const CustomerModel = require('./Model/user');
const nodemailer=require('nodemailer');
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


