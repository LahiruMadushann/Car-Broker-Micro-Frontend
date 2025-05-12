import React from "react";
import HomePageImage from "../assets/homepage.jpeg";

const Details = () => {
  return (
    <div className="font-sans p-6 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <img
          src={HomePageImage}
          alt="Admin Dashboard"
          className="w-full h-auto mt-6 rounded-lg shadow-xl"
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mt-8 mb-6 text-center">
          Admin Dashboard
        </h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed text-center">
          Welcome to the Car Broker Admin Panel. Manage your platform
          efficiently with our intuitive tools and features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Manage Listings
            </h2>
            <p className="text-gray-600 mb-4">
              Add, edit, or remove car listings to keep your inventory
              up-to-date.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Go to Listings
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              View Analytics
            </h2>
            <p className="text-gray-600 mb-4">
              Track user activity, sales performance, and other key metrics.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              View Analytics
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              User Management
            </h2>
            <p className="text-gray-600 mb-4">
              Manage user accounts, permissions, and roles with ease.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Manage Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
