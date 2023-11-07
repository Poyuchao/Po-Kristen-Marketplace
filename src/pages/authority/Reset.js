import React, { useState,useEffect} from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';

const Reset = () => {

    const [email, setEmail] = useState('');
    const [newpassword, setNewpassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');

    return (
        <div className="bg-white flex justify-center w-full pt-5">
            <div className="bg-white max-w-4xl w-full relative rounded-xl shadow-lg pt-2.5 mt-20 mb-20 flex space-x-2.5 min-h-max">
                <div className="flex-1 px-2.5 bg-gray-400 rounded-l-xl">
                    <div className="p-5">
                        <h1 className="font-bold text-4xl sm:text-2xl text-black text-shadow mt-12 text-center"></h1>
                        <img src={logo} alt="Taiwan Good Stuff Logo" className="w-full rounded-full shadow-lg mt-8 mb-8" />
                    </div>
                </div>
                <div className="flex-1 px-2.5 flex flex-col justify-center items-center rounded-r-xl">
                <h2 className="font-bold text-xl sm:text-2xl text-black text-shadow mb-4 text-center">Reset Password</h2>
              
           

                    <div className="flex flex-col w-full max-w-xs mx-auto">
                        <label htmlFor="New password" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            New Password
                            <input 
                                type="text" 
                                id="newpassword"
                                value={newpassword} // <- bind state
                                // onChange={handleName} // <- handle change
                                placeholder="Enter your password"
                                autoComplete="newpassword" //show autofill suggestions for an input field.
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                            />
                           
                        </label>

                        {/* Email */}
                        <label htmlFor="confirmPassword" className="font-roboto text-gray-500 mt-8 font-semibold block">
                                Confirm Password
                            <input
                                type="confirmPassword"
                                id="confirmPassword"
                                value={confirmPassword}
                                // onChange={handleEmailChange}
                                placeholder="Confirm your password"
                                autoComplete="password"
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500"
                                />
                               
                        </label>
                    </div>

                    <div className="flex flex-col items-center mb-2">
                      <button onClick={''} className="bg-gray-200 mt-12 mb-2 py-2 px-5 rounded-full shadow font-roboto text-black font-semibold">
                        Submit
                      </button>
                      
                    </div>
                </div>

               
            </div>
        </div>
                      
    );
};

export default Reset;