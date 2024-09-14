import React from 'react';
import { FaKey, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Additional icons

const EventsLog = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="flex items-center text-lg font-semibold text-gray-800">
          <FaKey className="mr-2" /> Events Log
        </h3>
        <button className="text-sm text-white bg-teal-500 hover:bg-teal-600 py-1 px-2 rounded-lg">See all</button>
      </div>
      <div className="space-y-4">
        {/* Event Log Entry */}
        <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md">
          <FaKey className="text-yellow-500 text-lg" />
          <div>
            <span className="font-semibold text-gray-800">hubx</span>
            <p className="text-sm text-gray-500">Logged in</p>
            <span className="text-xs text-gray-400">Sept 12, 2024 - 09:15 AM</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventsLog;
