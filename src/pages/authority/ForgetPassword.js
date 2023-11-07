import React, { useState,useEffect} from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';


const ForgetPassword = () => {

    const [email, setEmail] = useState('');
     // link to login
    const navigate=useNavigate()
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/ForgetPassword', { email });
            if (response.status === 200) {
                // Navigate to the reset password page
                navigate('/reset'); // Replace with your reset password page route
            }
        } catch (error) {
            console.error('Error sending reset email:', error);
            // Handle errors (e.g., display an error message)
        }
    };

    return (
        <div className="bg-white flex justify-center w-full pt-5">
            <div className="bg-white max-w-4xl w-full relative rounded-xl shadow-lg pt-2.5 mt-20 mb-20 flex space-x-2.5 min-h-max">
               
                <div className="flex-1 px-2.5 flex flex-col justify-center items-center rounded-r-xl">
                <h2 className="font-bold text-xl sm:text-2xl text-black text-shadow mb-4 text-center">Forgot Password</h2>
              
           

                    <div className="flex flex-col w-full max-w-xs mx-auto">
                        <label htmlFor="email" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Email address! 
                            <input 
                                type="email" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                            />
                           
                        </label>

                    </div>

                    <div className="flex flex-col items-center mb-2">
                    <button onClick={handleSubmit} className="bg-gray-200 mt-12 mb-2 py-2 px-5 rounded-full shadow font-roboto text-black font-semibold">
                        Submit
                    </button>
                      
                    </div>
                </div>

                <div className="flex-1 px-2.5 bg-gray-400 rounded-r-xl">
                    <div className="p-5">
                        <h1 className="font-bold text-4xl sm:text-2xl text-black text-shadow mt-12 text-center"></h1>
                        <img src={logo} alt="Taiwan Good Stuff Logo" className="w-full rounded-full shadow-lg mt-8 mb-8" />
                    </div>
                </div>
               
            </div>
        </div>
                      
    );
};

export default ForgetPassword;
