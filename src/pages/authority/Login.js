import React,{useState} from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const Login = () => {
   // States for registration
   // username
   const [username, setName] =useState('');
   const [usernameErrorMessage,setUsernameErrorMessage]=useState('');

   // password 
   const [password,setPassword]=useState('');
   const [passwordErrorMessage,setpassWordErrorMessage]=useState('');

   //Others error
   const [errorMessage,setErrorMessage]=useState('');

   // const [userInfo, setUserInfo] = useState({});
   const { setUserData } = useUser();

   // link to login
   const navigate=useNavigate()
   // Handling name email and password changes
   const handleName =(e) => setName(e.target.value);
   const handlePasswordChange = (e) => setPassword(e.target.value);
   const handleLogin = (e) => {
    e.preventDefault();
  
    // Reset any existing error messages
    setUsernameErrorMessage('');
    setpassWordErrorMessage('');
    setErrorMessage('');
  
    // Send a POST request to the login endpoint
    axios.post('http://localhost:3001/login', { username, password })
      .then((response) => {
        // Check for successful login response
        if (response.status === 200 && response.data.message === "Success") {
          console.log('Login successful');
  
          const userData = { username: username };
          setUserData(userData);
          localStorage.setItem('loggedInUser', JSON.stringify(userData));
          navigate('/'); // Redirect to home or dashboard
        }
      })
      .catch((err) => {
        if (err.response) {
          // Match the response from the server code and set the appropriate error message
          if (err.response.status === 401) {
            if (err.response.data.message === "User not found") {
              setUsernameErrorMessage('User not found. Please try again.');
            } else if (err.response.data.message === "The password is incorrect") {
              setpassWordErrorMessage('The password is incorrect. Please try again.');
            }
          } else if (err.response.status === 500) {
            setErrorMessage('An error occurred. Please try again later.');
          } else {
            // Handle other statuses
            setErrorMessage('Login failed. Please try again later.');
          }
        } else {
          // For non-response errors (like network issues)
          setErrorMessage('Unable to connect. Please check your internet connection and try again.');
          console.error('Login error:', err.message);
        }
      });
  };

    return (
        <div className="bg-white flex justify-center w-full pt-5 ">
            <div className="bg-white max-w-4xl w-full relative rounded-xl shadow-lg pt-2.5 mt-20 mb-20 flex space-x-2.5 min-h-max">

                <div className="flex-1 px-2.5 bg-gray-400 rounded-l-xl "> {/* Set to flex-grow-3 for left side */}
                <div className="p-5">
                <h1 className="font-bold text-4xl sm:text-2xl text-black text-shadow mt-12 text-center">Sign in your account</h1>
                <img src={logo} alt="Taiwan Good Stuff Logo" className="w-full rounded-full shadow-lg mt-8" />
               
            </div>

                </div>

                <div className="flex-1 px-2.5 mt-5 rounded-r-x"> {/* Set to flex-grow-2 for right side */}
                    <h2 className="font-bold text-xl sm:text-2xl text-black text-shadow mt-20 mb-10 text-left">Hello there!</h2>
                    <p className="font-bold text-lg mt-2">Welcome to Taiwan Good Stuff</p>

                    <label htmlFor="username" className="font-roboto text-gray-500 block mt-5 font-semibold ">
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
                         { usernameErrorMessage&& <p className="text-red-500">{usernameErrorMessage}</p>} 
                    </label>

                    <label className="font-roboto text-gray-500 block mt-5 font-semibold ">
                        Password
                        <input 
                                    type="password" 
                                    id="password"
                                    value={password} // bind password to state
                                    onChange={handlePasswordChange} // handle change
                                    placeholder="Enter your password"
                                    className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                                />
                        { passwordErrorMessage&& <p className="text-red-500">{passwordErrorMessage}</p>} 
                    </label>

                    <button onClick={handleLogin} className="bg-gray-200 mt-5 py-2 px-5 rounded-full shadow font-roboto text-black font-semibold">
                        Login
                    </button>

                    <div className="font-roboto text-black ml-3 inline-flex items-center">
                        <span>Still not have an account?</span>
                        <Link to="/register">
                            <span className="font-bold underline cursor-pointer ml-2 px-2 py-1 rounded">Register now!</span>
                        </Link>
                    </div>

                    <p className="font-bold text-blue-600 mt-3 cursor-pointer mb-60">Forget password?</p>
                </div>

            </div>
        </div>
    );
};

export default Login;