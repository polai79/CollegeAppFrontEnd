import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">CCMAS</h2>
          <p className="text-sm text-gray-300">
            A CITY COLLEGE OF MANAGEMENT AND SCIENCE, RAYAGADA — a premier institute established in 2023 under the Maa Majhigouri Educational and Charitable Trust.
          </p>
        </div>

        {/* Middle: Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Course</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Administration</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <p className="text-gray-400 text-sm mb-2">Add: Sai Priya Nagar, Rayagada, Odisha 765001</p>
          <p className="text-gray-400 text-sm mb-2">Call: +91 700 88 162 40</p>
          <p className="text-gray-400 text-sm mb-4">Email: <a href="mailto:ccmasrayagada@gmail.com" className="hover:text-white">ccmasrayagada@gmail.com</a></p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-500 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 <span className="text-green-400">CCMAS</span> . All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;