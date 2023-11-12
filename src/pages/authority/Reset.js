import React, { useState,useRef} from 'react';
import logo from '../../image/logo.png';
// import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    const [newPassword, setNewpassword] =useState('');

    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);

    const navigate = useNavigate();
    
    // function to make the user after inputing the first field, switch to the next field without re-render.
    const focusNextInput = (currentDigit) => {
        switch(currentDigit) {
            case '1':
                digit2Ref.current && digit2Ref.current.focus();
                break;
            case '2':
                digit3Ref.current && digit3Ref.current.focus();
                break;
            case '3':
                digit4Ref.current && digit4Ref.current.focus();
                break;
            default:
                // handle default case or do nothing
                break;
        }
    };
    
    
    // fucntion to handle password , confirmPassword , submit 
    const handlePasswordChange = (e) => setNewpassword(e.target.value);
    const handleConfirmPasswordChange =(e) => setConfirmPassword(e.target.value);

    const handleSubmit = async() => {
        const verificationCode =digit1 + digit2 + digit3 + digit4;
        console.log(verificationCode);
        if (newPassword !== confirmPassword) {
            alert ('Passwords do not match');
            return;
        }

        if (newPassword === '' || confirmPassword === '') {
            alert('Input field can not be empty');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/reset', {
                verificationCode,
                newPassword
            })
            if (response.status===200){
                alert('Password reset successfully');
                navigate ('/login');
            }
        }catch(error){
            console.error('Error resetting password:', error);
            alert('Verification code incorrect!');
        }

    };

    return (
        <div className="bg-white flex justify-center w-full pt-5">
            <div className="bg-white max-w-4xl w-full relative rounded-xl shadow-lg pt-2.5 mt-20 mb-20 flex space-x-2.5 min-h-max">
                {/**logo */}
                <div className="flex-1 px-2.5 bg-gray-400 rounded-l-xl">
                    <div className="p-5">
                        <h1 className="font-bold text-4xl sm:text-2xl text-black text-shadow mt-12 text-center"></h1>
                        <img src={logo} alt="Taiwan Good Stuff Logo" className="w-full rounded-full shadow-lg mt-8 mb-8" />
                    </div>
                </div>
                <div className="flex-1 px-2.5 flex flex-col justify-center items-center rounded-r-xl">
                <h2 className="font-bold text-xl sm:text-2xl text-black text-shadow mb-4 text-center">Reset Password</h2>
                <div className="flex flex-col w-full max-w-xs mx-auto">
                    <div className="flex justify-center space-x-2 mb-4">
                        {/* 4 separate input fields for the verification code */}
                        <input
                            ref={digit1Ref}
                            type="text"
                            maxLength="1"
                            value={digit1}
                            onChange={(e) => { setDigit1(e.target.value); focusNextInput('1'); }}
                            className="w-12 p-2 border rounded text-center"
                        />
                        <input
                            ref={digit2Ref}
                            type="text"
                            maxLength="1" // each input can only hold one digit
                            value={digit2}
                            onChange={(e) => { setDigit2(e.target.value); focusNextInput('2'); }}
                            className="w-12 p-2 border rounded text-center"
                        />
                        <input
                            ref={digit3Ref}
                            type="text"
                            maxLength="1"
                            value={digit3}
                            onChange={(e) => { setDigit3(e.target.value); focusNextInput('3'); }}
                            className="w-12 p-2 border rounded text-center"
                        />
                        <input
                            ref={digit4Ref}
                            type="text"
                            // the field only allow 1 digit.
                            maxLength="1"
                            value={digit4}
                            onChange={(e) => { setDigit4(e.target.value); }}
                            className="w-12 p-2 border rounded text-center"
                        />
                    </div>
                    {/* ... other inputs ... */}
                </div>
           

                    <div className="flex flex-col w-full max-w-xs mx-auto">
                        <label htmlFor="New password" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            New Password
                            <input 
                                type="text" 
                                id="newpassword"
                                value={newPassword} // <- bind state
                                onChange={handlePasswordChange} // <- handle change
                                placeholder="Enter your password"
                                autoComplete="new-password" //show autofill suggestions for an input field.
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
                                onChange={handleConfirmPasswordChange}
                                placeholder="Confirm your password"
                                autoComplete="new-password"
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

               
            </div>
        </div>
                      
    );
};

export default Reset;