import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const location = useLocation();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('login') === 'true';
    setIsLoggedIn(loggedIn);
    const storedUsername = sessionStorage.getItem('username');
    setUsername(storedUsername || '');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('username');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/real">Real</Link>
      </li>
      <li>
        <Link to="/fiction">Fiction</Link>
      </li>
      <li>
        <Link to="/facts">Facts</Link>
      </li>
      <li>
        <Link to="/images">Images</Link>
      </li>
      <li>
        <Link to="/speakup">SpeakUp</Link>
      </li>
    </>
  );

  const isHomePage = location.pathname === "/";
  const isRealPage = location.pathname === "/real";
  const isFictionPage = location.pathname === "/fiction";
  const isImagePage = location.pathname === "/images";
  const isFactPage = location.pathname === "/facts";

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
          sticky ? "sticky-navbar shadow-md bg-black text-white" : ""
        }`}
      >
        <div className="navbar bg-base-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className="text-2xl font-bold cursor-pointer">
              TheSecrets
            </Link>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="hidden md:block">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            {!isLoggedIn && (
              <div className="">
                <Link
                  to="/login"
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                >
                  Signup
                </Link>
              </div>
            )}
            {isLoggedIn && isRealPage && (
              <div className="">
                <Link
                  to="/add-real"
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                >
                  Add
                </Link>
              </div>
            )}
            {isLoggedIn && isFictionPage && (
              <div className="">
                <Link
                  to="/add-fictional"
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                >
                  Add
                </Link>
              </div>
            )}
            {isLoggedIn && isImagePage && (
              <div className="">
                <Link
                  to="/add-images"
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                >
                  Add
                </Link>
              </div>
            )}
            {isLoggedIn && isFactPage && (
              <div className="">
                <Link
                  to="/add-facts"
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                >
                  Add
                </Link>
              </div>
            )}
            {isLoggedIn && (
              <div className="flex items-center space-x-4">
                <span className="text-white">{username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Navbar;
