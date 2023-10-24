import React, { useState } from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [gender, setGender] = useState(''); // Default as empty string

    const handleSubmit = () => {
        // Here you can handle the form submission, e.g. sending the data to a server
        console.log({
            gender,
            // ... other form data
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
                                placeholder="Enter your username"
                                autoComplete="username"
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                            />
                        </label>

                        <label htmlFor="Email" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Email
                            <input 
                                type="email" 
                                id="Email"
                                placeholder="Enter your Email"
                                autoComplete="email"
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                            />
                        </label>

                        <label htmlFor="password" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Password
                            <input 
                                type="password" 
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                            />
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
                                    onChange={(e) => setGender(e.target.value)} 
                                    className="mr-2"
                                />
                                <label htmlFor="male" className="font-roboto text-gray-500 mr-4">Male</label>

                                <input 
                                    type="radio" 
                                    id="female" 
                                    name="gender" 
                                    value="female" 
                                    checked={gender === 'female'}
                                    onChange={(e) => setGender(e.target.value)} 
                                    className="mr-2"
                                />
                                <label htmlFor="female" className="font-roboto text-gray-500">Female</label>
                            </div>
                        </div>

                    </div>

                    <button onClick={handleSubmit} className="bg-gray-200 mt-8 mb-6 py-2 px-5 rounded-full shadow font-roboto text-black font-semibold">
                        Submit
                    </button>

                    <div className="font-roboto text-sky-600 ml-3 inline-flex items-center">
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
