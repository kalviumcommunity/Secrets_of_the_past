import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://secrets-of-the-past-2.onrender.com/login', { email, password });

      if (response.status === 200) {
        sessionStorage.setItem('login', true);
        sessionStorage.setItem('email', email);
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      setLoginError('Invalid email or password. Please try again.');
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
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-md p-8 bg-black text-white rounded-lg shadow-md border-4 border-white">
        <h2 className="text-center text-2xl mb-4 font-bold text-red-700">Login</h2>
        <p className='pl-8 pb-4'>One more step to unlock all features</p>
        <form onSubmit={handleLogin}>
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
              placeholder='Enter your password'
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          {loginError && <p className="text-red-500 mb-2">{loginError}</p>}
          <button type="submit" className="w-full px-3 py-2 mt-3 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer">Login</button>
        </form>
        <p className="text-center mt-4">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
