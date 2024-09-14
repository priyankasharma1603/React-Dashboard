import React from 'react';
import { FaUsers } from 'react-icons/fa';
import icon from '../assets/icon.png' // Icon for new users

const NewUsers = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold flex items-center">
          <FaUsers className="mr-2" /> New users
        </h3>
        <button className="text-sm text-white bg-teal-500 hover:bg-teal-600 py-1 px-2 rounded-lg">See all</button>
      </div>
      <div className="flex items-center space-x-2">
        <img src={icon} alt="User Icon" className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm">hubx</p>
          <p className="text-xs text-gray-500">24 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default NewUsers;
