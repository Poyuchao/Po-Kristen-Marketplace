import React,{useState} from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';


const Login = () => {
   // States for registration
   const [username, setName] =useState('');
   const [password,setPassword]=useState('');
   const [userInfo, setUserInfo] = useState({});
   // link to login
   const navigate=useNavigate()
   // Handling name email and password changes
   const handleName =(e) => setName(e.target.value);
   const handlePasswordChange = (e) => setPassword(e.target.value);
   
   const handleLogin =(e) => {
    // stops the form from doing its default action
    e.preventDefault()
    // It uses axios to make a POST request to http://localhost:3001/login with the username and password as data.
    //  The POST method is used to submit data to be processed to a specified resource. For instance,
    //  when you fill out a form on a web page and click the submit button, behind the scenes, 
    // your web browser might be using a POST request to send that data to a server.
    axios.post('http://localhost:3001/login',{username,password})
    //  The result is the response object returned by the server after the axios.post()
    .then(result =>{console.log(result)
        if (result.data === "Success") {
          
            const userData = { username: username };

            setUserInfo(userData);
            console.log(userData);
            console.log(userInfo);
            // Store user data in localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(userData));

         
            navigate('/');
        }
    })
    .catch(err=> console.log(err))
}

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