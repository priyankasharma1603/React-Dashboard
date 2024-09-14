import React from 'react';
import { FaPlus, FaEye, FaHome, FaQuestionCircle } from 'react-icons/fa'; // Importing icons from Font Awesome

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md flex justify-between items-center p-4">
      <div className="flex space-x-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded flex items-center space-x-2 hover:bg-gray-200">
          <FaPlus size={16} />  {/* Icon for Create Course */}
          <span>Create course</span>
        </button>
        <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded flex items-center space-x-2 hover:bg-gray-200">
          <FaEye size={16} />  {/* Icon for Preview Home Page */}
          <span>Preview home page</span>
        </button>
        <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded flex items-center space-x-2 hover:bg-gray-200">
          <FaEye size={16} />  {/* Icon for Preview After Login Page */}
          <span>Preview after login page</span>
        </button>
        <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded flex items-center space-x-2 hover:bg-gray-200">
          <FaHome size={16} />  {/* Icon for View Welcome Screen */}
          <span>View welcome screen</span>
        </button>
      </div>
      <div>
        <button className="text-teal-600 hover:text-gray-600">
          <FaQuestionCircle size={24} />Help 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
