import React from 'react';
import { NavLink } from 'react-router-dom';

import { GoGraph } from "react-icons/go";


const Navbar = () => {
    return (
      <div className="flex h-16 w-full fixed top-0 justify-around items-center px-6 shadow-md bg-white z-50">
        <div className='flex justify-between items-center gap-3'>
          <GoGraph size={30} className="text-blue-800 drop-shadow-md font-bold" />
          <h1 className="text-black text-xl font-bold">Trading App</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="text-black hover:text-gray-700 text-md">Home</NavLink>
          <NavLink to="/dashboard" className="text-black hover:text-gray-700 text-md">Dashboard</NavLink>
          <NavLink to="/about" className="text-black hover:text-gray-700 text-md">About</NavLink>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  

export default Navbar;
