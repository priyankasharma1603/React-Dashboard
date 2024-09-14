import React from 'react';
import { FaHourglassHalf } from 'react-icons/fa'; // Icon for trial period
import backgroundImage from '../assets/bg.png'; // Adjust path to your image

const TrialPeriod = () => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md relative overflow-hidden w-90 " // Set width to match
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',  // Adjust background scaling
        backgroundRepeat: 'no-repeat', // Prevent background repetition
        backgroundPosition: 'right', // Position the background to the right
      }}
    >
      <div className="relative z-10">
        <h3 className="flex items-center text-gray-700 text-lg font-semibold">
          Trial period
        </h3>
        <div className="flex items-center justify-between mt-4">
          {/* Circular progress style */}
          <div className="bg-teal-400 w-20 h-20 rounded-full flex flex-col items-center justify-center text-white">
            <span className="text-white text-2xl font-bold">30</span>
            <span className="text-xs">DAYS LEFT</span>
          </div>
          {/* Upgrade button */}
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-pink-700 transition duration-300">
            Upgrade now! &gt;&gt;
          </button>
        </div>
        {/* Hourglass icon on the right */}
        <FaHourglassHalf className="absolute top-2 right-2 text-gray-400 text-xl" />
      </div>
    </div>
  );
};

export default TrialPeriod;
