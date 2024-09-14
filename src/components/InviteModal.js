import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InviteModal = ({ closeModal }) => {
  const [invites, setInvites] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  const handleCalculate = () => {
    // Navigate to the PriceCalculator page with the invites and duration as state
    navigate('/price-calculator', {
      state: {
        invites: parseInt(invites),
        duration: parseInt(duration),
      },
    });
    closeModal(); // Close modal after navigation
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Invite People to Event</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">Number of Invites</label>
          <input
            type="number"
            value={invites}
            onChange={(e) => setInvites(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter number of invites"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Duration of Event (hours)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter duration in hours"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleCalculate}
          >
            Calculate Price
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
