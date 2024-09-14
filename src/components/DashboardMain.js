import React from 'react';
import { FaUsers, FaSyncAlt, FaShoppingBag, FaClock, FaBook, FaTags } from 'react-icons/fa'; // Importing icons
import LineChart from './LineChart';

const DashboardMain = () => {
  return (
    <div className="p-6 bg-white rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Your School</h2>
        <div className="space-x-4 flex items-center">
          <select className="bg-gray-100 p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>New signups</option>
            <option>Revenue</option>
            <option>Product sales</option>
            <option>Active learners</option>
          </select>
          <select className="bg-gray-100 p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 pr-4">
          <LineChart />
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 mt-6 md:mt-0">
          <StatBox title="All users" value="1" icon={<FaUsers size={28} className="text-teal-600" />} />
          <StatBox title="Conversions" value="0%" icon={<FaSyncAlt size={28} className="text-teal-600" />} />
          <StatBox title="30 days sales" value="0" icon={<FaShoppingBag size={28} className="text-teal-600" />} />
          <StatBox title="Avg time" value="0 min" icon={<FaClock size={28} className="text-teal-600" />} />
          <StatBox title="Courses" value="0" icon={<FaBook size={28} className="text-teal-600" />} />
          <StatBox title="Course categories" value="0" icon={<FaTags size={28} className="text-teal-600" />} />
        </div>
      </div>
    </div>
  );
};

// StatBox Component with Improved Styling
const StatBox = ({ title, value, icon }) => (
  <div className="bg-gray-100 p-6 rounded-md shadow-md flex items-center justify-between hover:bg-gray-200 transition-colors">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
    <div>{icon}</div>
  </div>
);

export default DashboardMain;
