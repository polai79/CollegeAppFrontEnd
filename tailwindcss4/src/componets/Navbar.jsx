import React from 'react';
import { NavLink ,useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <nav className="bg-slate-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="College Logo"
          className="h-10 w-auto"
        />

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold transition-colors duration-200"
                : "text-gray-700 hover:text-blue-600 transition-colors duration-200"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold transition-colors duration-200"
                : "text-gray-700 hover:text-blue-600 transition-colors duration-200"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold transition-colors duration-200"
                : "text-gray-700 hover:text-blue-600 transition-colors duration-200"
            }
          >
            Contacts
          </NavLink>
        </ul>

        {/* Button */}
        <button onClick={()=>navigate('/')} className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;