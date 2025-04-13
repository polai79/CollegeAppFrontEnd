import React, { useState } from "react";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login"; // ✅ Import Login

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // ✅ New state for Login modal

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl pb-5 pt-5 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Navbar Row */}
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <img
                src="logo2.png"
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
              <span className="text-6xl font-bold text-purple-600">CCMAS</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Campus</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Gallary</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>

              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />

              {/* Login Button */}
              <button
                onClick={() => setShowLogin(true)} // ✅ Show Login modal
                className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
              >
                Login
              </button>

              {/* Sign Up Button */}
              <button
                onClick={() => setShowSignUp(true)}
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl text-gray-700 focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col gap-3 py-4 border-t">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Courses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Campus</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>

              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />

              {/* Mobile Login Button */}
              <button
                onClick={() => setShowLogin(true)} // ✅ Show Login modal from mobile too
                className="py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
              >
                Login
              </button>

              {/* Mobile Sign Up Button */}
              <button
                onClick={() => setShowSignUp(true)}
                className="py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* SignUp Modal */}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}

      {/* ✅ Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;