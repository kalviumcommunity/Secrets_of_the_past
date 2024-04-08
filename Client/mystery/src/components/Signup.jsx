import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import signupbooks from "../../public/signupbooks.png";
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Username:", username);
        console.log("Password:", password);

        try {
            if (password.length < 6) {
                setSignupError("Password should be more than 5 characters");
                return;
            }
            const response = await axios.post(`https://secrets-of-the-past-2.onrender.com/signup`, { username, password });
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
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md p-8 border border-gray-300 rounded mr-10">
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1 font-bold">Username:</label>
                        <input
                            type="text"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded"
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
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    {signupError && <p className="text-red-500 mb-2">{signupError}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
                </form>
                <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
            </div>
            <div className="hidden md:block" style={{ maskImage: 'radial-gradient(circle at top left, transparent 20%, black 60%)', WebkitMaskImage: 'radial-gradient(circle at top left, transparent 20%, black 100%)' }}>
                <img src={signupbooks} className='w-92 h-92 pt-19 md:pl-45' alt="home-book" style={{ width: '100%' }} />
            </div>
        </div>
    );
}

export default Signup;
