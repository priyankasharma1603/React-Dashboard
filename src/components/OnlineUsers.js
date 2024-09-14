import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import icon from '../assets/icon.png' // Icon for online users

const OnlineUsers = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="flex items-center">
          <FaUserCircle className="mr-2 text-green-500" /> Online users (1)
        </h3>
      </div>
      <div className="flex items-center space-x-2">
        <img src={icon} alt="User Icon" className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm">hubx</p>
          <p className="text-xs text-gray-500">24 minutes ago</p>
        </div>
        <button className="text-sm text-white bg-teal-500 hover:bg-teal-600 py-1 px-2 rounded-lg mt-1 ml-50">Contact</button>
      </div>
 
    </div>
  );
};

export default OnlineUsers;
