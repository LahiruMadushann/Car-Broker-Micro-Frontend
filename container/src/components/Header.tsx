import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-gray-700 text-white">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
        <h1 className="text-2xl font-bold ml-4">Car Broker Admin Panel</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-lg font-bold">
          <i className="ri-logout-box-line mr-2"></i>
          Admin Panel
        </button>
        <button className="flex items-center text-lg font-bold">
          <i className="ri-logout-box-line mr-2"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
