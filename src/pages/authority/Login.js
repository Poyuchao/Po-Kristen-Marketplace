import React from 'react';
import logo from '../../image/logo.png';

const Login = () => {
    return (
        <div className="bg-white flex justify-center w-full pt-5">
            <div className="bg-white max-w-4xl w-full relative rounded-xl shadow-lg pt-2.5 mt-20 mb-20 flex space-x-2.5 min-h-max">

                <div className="flex-1 px-2.5 bg-gray-400 rounded-l-xl"> {/* Set to flex-grow-3 for left side */}
                <div className="p-5">
                <h1 className="font-bold text-4xl sm:text-2xl text-black text-shadow mt-12 text-center">Sign in your account</h1>
                <img src={logo} alt="Taiwan Good Stuff Logo" className="w-full rounded-md shadow-lg mt-8" />
               
            </div>

                </div>

                <div className="flex-1 px-2.5 mt-5 rounded-r-xl"> {/* Set to flex-grow-2 for right side */}
                    <h2 className="font-bold text-xl sm:text-2xl text-black text-shadow mt-20 mb-10 text-left">Hello there!</h2>
                    <p className="font-bold text-lg mt-2">Welcome to Taiwan Good Stuff</p>

                    <label htmlFor="username" className="font-roboto text-gray-500 block mt-5 font-semibold ">
                        Username 
                        <input 
                            type="text" 
                            id="username"
                            placeholder="Enter your username"
                            autoComplete="username"
                            className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                        />
                    </label>

                    <label className="font-roboto text-gray-500 block mt-5 font-semibold ">
                        Password
                        <input type="password" className="mt-1 w-full p-2 border rounded"  placeholder="Enter your password" />
                    </label>

                    <button className="bg-gray-200 mt-5 py-2 px-5 rounded-full shadow font-roboto text-black font-semibold">
                        Login
                    </button>

                    <div className="font-roboto text-black ml-3 inline-flex items-center">
                        <span>Still not have an account?</span>
                        <span className="font-bold underline cursor-pointer ml-2 px-2 py-1 rounded">Register now!</span>
                    </div>

                    <p className="font-bold text-blue-600 mt-3 cursor-pointer mb-60">Forget password?</p>
                </div>
                
            </div>
        </div>
    );
};

export default Login;