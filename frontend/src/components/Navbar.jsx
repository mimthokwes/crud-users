import React from 'react';
import { Link } from 'react-router'; // perbaiki dari 'react-router' ke 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="flex justify-between pr-24 pl-24 items-center absolute h-14 mt-5 w-[90%]
        rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
        
        <span className="logo">
          <img src="" alt="Logo" className="h-8" />
        </span>

        <ul className="flex justify-around items-center">
          <Link className="mr-10 text-gray-900 hover:underline" to="/home"><strong>Home</strong></Link>
          <Link className="mr-10 text-gray-900 hover:underline" to="/students"><strong>Students</strong></Link>
          <Link className="mr-10 text-gray-900 hover:underline" to="#"><strong>Find Student</strong></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
