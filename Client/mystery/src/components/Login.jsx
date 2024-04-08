import { useState } from 'react';
import { Link } from 'react-router-dom';
import login from "../../public/login.png";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div style={{ maskImage: 'radial-gradient(circle at top left, transparent 10%, black 60%)', WebkitMaskImage: 'radial-gradient(circle at top left, transparent 20%, black 100%)' }}>
          <img src={login} className='w-32 h-80 rounded-md overflow-hidden mt-[-20px]' alt="home-book" style={{ width: '100%' }} />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-8">Login</h2>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
        </form>
        <p className="mt-4"> Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
