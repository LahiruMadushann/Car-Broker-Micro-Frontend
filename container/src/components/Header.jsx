import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 rounded-full border-2 border-white shadow-md"
          />
          <h1 className="text-3xl font-extrabold text-white ml-4">
            Car Broker Admin Panel
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <button className="flex items-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition">
            <i className="ri-dashboard-line mr-2"></i>
            Admin Panel
          </button>
          <button className="flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
            <i className="ri-logout-box-line mr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
