import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginbooks from "../../public/loginbooks.png";

function Signup({ onSignup }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password.length < 6) {
                setSignupError("Password should be more than 5 characters");
                return;
            }
            onSignup(username, password);
        } catch (err) {
            console.error(err);
            setSignupError('An error occurred during the signup');
        }
    };

    return (
        <div className="flex max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Username:</label>
                        <input
                            type="text"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {signupError && <p className="text-red-500 text-xs italic">{signupError}</p>}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
                </form>
                <p className="text-gray-700 text-xs">Already have an account? <Link to='/login' className="text-blue-500 hover:text-blue-700">Login</Link></p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center pt-8 md:pt-20 md:pt-0">
            <div style={{ maskImage: 'radial-gradient(circle at top left, transparent 10%, black 60%)', WebkitMaskImage: 'radial-gradient(circle at top left, transparent 20%, black 100%)' }}>
                <img src={loginbooks} className='w-40 h-110 rounded-md overflow-hidden' alt="home-book" style={{ width: '100%', marginTop: '20px' }} />
                </div>
            </div>
        </div>
    );
}

export default Signup;
