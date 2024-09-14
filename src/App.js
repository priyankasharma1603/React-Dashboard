import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardMain from './components/DashboardMain';
import UserInfo from './components/UsersInfo';
import BlogSection from './components/BlogSection';
import EventsLog from './components/EventsLog';
import TrialPeriod from './components/TrialPeriod';
import OnlineUsers from './components/OnlineUsers';
import InviteModal from './components/InviteModal';
import PriceCalculator from './components/PriceCalculator'; // Import PriceCalculator

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleInviteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 1st Part: Navigation Bar */}
      <Navbar />

      {/* 2nd Part: Top Section - DashboardMain */}
      <div className="flex-1 p-6 mb-1 mt-">
        <DashboardMain />
        <button
          className="bg-teal-500 text-white py-2 px-4 rounded mt-4 w-full md:w-auto" // Button full-width on mobile, auto on larger screens
          onClick={handleInviteClick}
        >
          Invite
        </button>
      </div>

      {/* 3rd Part: Bottom Section - Grid Layout */}
      <div className="p-6 grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* First Row - Four Components */}
        <div className="h-[200px] md:h-[200px]">
          <UserInfo />
        </div>
        <div className="h-[200px] md:h-[200px]">
          <BlogSection />
        </div>
        <div className="h-[200px] md:h-[200px]">
          <EventsLog />
        </div>
        <div className="h-[200px] md:h-[200px]">
          <TrialPeriod />
        </div>

        {/* Second Row - OnlineUsers Section */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3 h-[200px] md:h-[300px]">
            {/* Empty space to align OnlineUsers correctly */}
          </div>
          <div className="md:col-span-1 h-[200px] md:h-[300px]">
            <OnlineUsers />
          </div>
        </div>
      </div>

      {/* 4th Part: Footer Section */}
      <footer className="bg-gray-200 p-4 text-center mt-auto">
        <p>Activate Windows <a href="#" className="text-blue-500">Activate Windows</a></p>
      </footer>

      {/* Invite Modal */}
      {isModalOpen && <InviteModal closeModal={handleCloseModal} />}
    </div>
  );
}

function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/price-calculator" element={<PriceCalculator />} /> {/* Corrected path */}
    </Routes>
  );
}

export default RoutesWrapper;
