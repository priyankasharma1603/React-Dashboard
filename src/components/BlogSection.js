import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa'; // Icon for blog section

const BlogSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-90"> {/* Adjust width */}
      {/* Blog Section Title */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <FaRegNewspaper className="text-gray-600 mr-2" /> {/* Icon */}
          <h3 className="text-sm font-semibold text-gray-700">How to sell courses blog</h3>
        </div>
        <button className="text-xs text-white bg-teal-400 hover:bg-teal-500 py-1 px-2 rounded-lg">
          see all
        </button>
      </div>

      {/* Blog List */}
      <ul className="space-y-3 text-sm text-teal-500 list-none"> {/* Removed bullets, adjusted font */}
        <li className="flex justify-between items-center">
          <span>Blended Learning: What It Is, Why It Matters & How to Apply</span>
          <span className="text-xs text-gray-400">7 days ago</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Join the Course Sales Bootcamp [Free Live Workshops]</span>
          <span className="text-xs text-gray-400">12 days ago</span>
        </li>
        <li className="flex justify-between items-center">
          <span>12 Steps to Creating Awesome Live Classes in 2021</span>
          <span className="text-xs text-gray-400">20 days ago</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Guy Kawasaki on the Future of Business in the Midst of a Pandemic</span>
          <span className="text-xs text-gray-400">22 days ago</span>
        </li>
        <li className="flex justify-between items-center">
          <span>What is Educational Marketing & How to Use it to Grow with Examples</span>
          <span className="text-xs text-gray-400">23 days ago</span>
        </li>
      </ul>
    </div>
  );
};

export default BlogSection;
