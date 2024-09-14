import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/">MyLogo</a>
        </div>
        <div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
