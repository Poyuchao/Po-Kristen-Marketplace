import React, { useState,useEffect} from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
// Import validation functions
import {
    validateUsername,validatePassword,validateEmail
  } 
  from './Validation'; 

const Register = () => {
    // States for registration
    // username , username validation
    const [username, setName] =useState('');
    const [usernameError, setUsernameError] = useState('');
    

    // email, email validation 
    const [email, setEmail]=useState('');
    const [emailError, setEmailError] = useState('');

    // password, password validation
    const [password,setPassword]=useState('');
    const [passwordError, setPasswordError] = useState('')

    const [gender, setGender] = useState(''); // Default as empty string
    // const [genderError, setGenderError] = useState('')
    // check form complete
    const [formIncomplete, setFormIncomplete] = useState(false);

    // link to login
    const navigate=useNavigate()
   
    useEffect(() => {
        // Check initial validation for email
        const emailValidationResult = validateEmail(email);
        if (emailValidationResult) {
          setEmailError(emailValidationResult);
        }
      
        // Check initial validation for username
        const userNameValidationResult = validateUsername(username);
        if (userNameValidationResult) {
          setUsernameError(userNameValidationResult);
        }

         // Check initial validation for password
        const passwordValidationResult = validatePassword(password);
        if (passwordValidationResult) {
            setPasswordError(passwordValidationResult);
        }

      }, [email, username,password]);
      
     // Handling name email and password changes
     const handleName = (e) => {
        const usernameValue = e.target.value;
        setName(usernameValue);
        // Use the validateUsername function to check for username validity
        const usernameValidationResult = validateUsername(usernameValue);

        if (usernameValidationResult) {
          setUsernameError(usernameValidationResult);
        } else {
          setUsernameError(''); // Clear the error message when the username is valid
        }
       
      };

      const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        const emailValidationResult = validateEmail(emailValue);
    
        if (emailValidationResult) {
          setEmailError(emailValidationResult);
        } else {
          setEmailError('');
        }
      };

     const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        const passwordValidationResult = validatePassword(passwordValue);
    
        if (passwordValidationResult) {
          setPasswordError(passwordValidationResult);
        } else {
          setPasswordError('');
        }
     }

     const handleGenderChange = (e) => {
      setGender(e.target.value);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (gender === '') {
          setFormIncomplete(true);
          console.log('Form has errors. Please fix them.');
          return;
      }
  
      // Check if there are any error messages
      if (usernameError || emailError || passwordError) {
          setFormIncomplete(true);
          console.log('Form has errors. Please fix them.');
          alert('Oops! It looks like some information is missing or incorrect. Please check your entries and try again.');
          return;
      }
    
      // If there are no errors, proceed with form submission
      axios.post('http://localhost:3001/register', { username, email, password, gender })
      .then((result) => {
          console.log(result);
          navigate('/login');
      })
      .catch((err) => {
          if (err.response && err.response.status === 409) {
              const errorMessage = err.response.data.message;
              if (errorMessage.includes('Username')) {
                  setUsernameError('Username already exists. Please choose another one!');
              } else if (errorMessage.includes('Email')) {
                  setEmailError('Email already exists. Please choose another one!');
              }
          } else {
              // Handle other types of errors
              console.log('Registration error:', err.message);
          }
      });
  };
  
    

    return (
        <div className="bg-white flex justify-center w-full pt-5">
            <div className="bg-white max-w-4xl w-full relative rounded-xl shadow-lg pt-2.5 mt-20 mb-20 flex space-x-2.5 min-h-max">
                <div className="flex-1 px-2.5 flex flex-col justify-center items-center rounded-r-xl">
                    <h2 className="font-bold text-xl sm:text-2xl text-black text-shadow mb-4 text-center">Create your account</h2>

                    <div className="flex flex-col w-full max-w-xs mx-auto">
                        <label htmlFor="username" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Username
                            <input 
                                type="text" 
                                id="username"
                                value={username} // <- bind state
                                onChange={handleName} // <- handle change
                                placeholder="Enter your username"
                                autoComplete="username" //show autofill suggestions for an input field.
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                            />
                            {/* This part checks if the usernameError variable has a truthy value.
                             In JavaScript, an empty string ('') is considered falsy**/}
                             {usernameError && <p className="text-red-500">{usernameError}</p>} {/* Display error if usernameError is not empty */}
                        </label>

                        {/* Email */}
                        <label htmlFor="Email" className="font-roboto text-gray-500 mt-5 font-semibold block">
                                Email
                            <input
                                type="email"
                                id="Email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your Email"
                                autoComplete="email"
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500"
                                />
                                {emailError && <p className="text-red-500">{emailError}</p>} {/* Display error if emailError is not empty */}
                        </label>

                        <label htmlFor="password" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Password
                                <input 
                                    type="password" 
                                    id="password"
                                    value={password} // bind password to state
                                    onChange={handlePasswordChange} // handle change
                                    placeholder="Enter your password"
                                    className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                                />
                                 {passwordError && <p className="text-red-500">{passwordError}</p>} {/* Display error if emailError is not empty */}
                        </label>

                        {/*Gender*/}
                        <div className="mt-5 flex justify-end">
                            <div className="flex items-center mt-2">
                                <input 
                                    type="radio" 
                                    id="male" 
                                    name="gender" 
                                    value="male" 
                                    checked={gender === 'male'}
                                    onChange={handleGenderChange} 
                                    className="mr-2"
                                />
                                <label htmlFor="male" className="font-roboto text-gray-500 mr-4">Male</label>

                                <input 
                                    type="radio" 
                                    id="female" 
                                    name="gender" 
                                    value="female" 
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange} 
                                    className="mr-2"
                                />
                                <label htmlFor="female" className="font-roboto text-gray-500">Female</label>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col items-center mb-2">
                      <button onClick={handleSubmit} className="bg-gray-200 mt-8 mb-2 py-2 px-5 rounded-full shadow font-roboto text-black font-semibold">
                        Submit
                      </button>
                      {/*}
                      {formIncomplete && (
                          <p className="text-red-500">
                          Oops! It looks like some information is missing or incorrect. Please check your entries and try again.
                        </p>
                      )}
                      **/}
                    </div>

                    <div className="font-roboto text-sky-600 ml-3 inline-flex items-center mb-2">
                        <span>Already have an account?</span>
                        <Link to="/Login">
                            <span className="font-bold underline cursor-pointer ml-2 px-2 py-1 rounded">Login!</span>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 px-2.5 bg-gray-400 rounded-r-xl">
                    <div className="p-5">
                        <h1 className="font-bold text-4xl sm:text-2xl text-black text-shadow mt-12 text-center">Register Now!</h1>
                        <img src={logo} alt="Taiwan Good Stuff Logo" className="w-full rounded-full shadow-lg mt-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
