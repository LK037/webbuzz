import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">XYZ Cricket</Link>
        <div>
          <Link to="/register" className="mx-2">Register</Link>
          <Link to="/leaderboard" className="mx-2">Leaderboard</Link>
          <Link to="/about" className="mx-2">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
