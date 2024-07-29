import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (password.length < 6) {
                setSignupError("Password should be more than 5 characters");
                return;
            }
            const response = await axios.post(`https://secrets-of-the-past-2.onrender.com/signup`, { email, password });
            if (response.status === 201) {
                sessionStorage.setItem('login', true);
                sessionStorage.setItem('signupSuccess', 'Signup successful');
                setSignupSuccess(true);
            } else {
                setSignupError('Signup failed');
            }
        } catch (err) {
            console.error(err);
            setSignupError('An error occurred during the signup');
        }
    }

    if (signupSuccess) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="w-full max-w-md p-8 bg-black text-white rounded-lg shadow-md border-4 border-white"> 
                <h2 className="text-center text-2xl mb-4 font-bold text-red-700">Sign Up</h2> 
                <p className='pl-8 pb-4'>Sign up to unlock few more features</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-bold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Please Enter your Email'
                            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1 font-bold">Password:</label>
                        <input 
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Set your own password'
                            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    {signupError && <p className="text-red-500 mb-2">{signupError}</p>}
                    <button type="submit" className="w-full px-3 py-2 mt-3 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer">Sign Up</button>
                </form>
                <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;
