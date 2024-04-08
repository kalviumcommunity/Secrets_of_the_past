import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from "../../public/login.png";

import axios from 'axios';

const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://secrets-of-the-past-2.onrender.com/login', { username, password });

      if (response.status === 200) {
        sessionStorage.setItem('login', true);
        sessionStorage.setItem('username', username);
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);

      // Set a generic error message
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://s55-educate-5.onrender.com/logout');

      if (response.status === 200) {
        console.log('Logout successful');
        setCookie('loggedIn', false, -1);
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mr-8" style={{ maskImage: 'radial-gradient(circle at top left, transparent 20%, black 60%)', WebkitMaskImage: 'radial-gradient(circle at top left, transparent 20%, black 100%)' }}>
        <img src={login} className='w-59 h-59 pt-12 md:pl-8' alt="home-book" style={{ width: '100%' }} />
      </div>
      <div className="login-container w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">Login</button>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">Logout</button>
          </div>
        </form>
        <p className="text-center mt-4"> Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
