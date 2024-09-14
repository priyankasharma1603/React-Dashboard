import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the elements and plugins
ChartJS.register(ArcElement, Tooltip, Legend);

const PriceCalculator = () => {
  const [investment, setInvestment] = useState(100000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(5);

  const calculateReturns = () => {
    const estReturns = investment * Math.pow(1 + returnRate / 100, timePeriod) - investment;
    return estReturns;
  };

  const totalReturns = calculateReturns();
  const totalValue = investment + totalReturns;

  // Chart data
  const chartData = {
    labels: ['Total Investment', 'Est. Returns'],
    datasets: [
      {
        data: [investment, totalReturns],
        backgroundColor: ['#36A2EB', '#4CAF50'],
        borderColor: ['#36A2EB', '#4CAF50'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-8">Mutual Fund Returns Calculator</h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl w-full flex flex-row items-center justify-between">
        {/* Left section with sliders and summary */}
        <div className="flex flex-col w-2/3 pr-4">
          {/* Total Investment Slider */}
          <div className="mb-6">
            <label className="block text-lg font-medium">Total Investment</label>
            <div className="flex items-center justify-between">
              <input
                type="range"
                min="10000"
                max="1000000"
                step="1000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-lg font-semibold ml-4">₹ {investment.toLocaleString()}</span>
            </div>
          </div>

          {/* Expected Return Rate Slider */}
          <div className="mb-6">
            <label className="block text-lg font-medium">Expected Return Rate (%)</label>
            <div className="flex items-center justify-between">
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-lg font-semibold ml-4">{returnRate} %</span>
            </div>
          </div>

          {/* Time Period Slider */}
          <div className="mb-6">
            <label className="block text-lg font-medium">Time Period (Years)</label>
            <div className="flex items-center justify-between">
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-lg font-semibold ml-4">{timePeriod} Yr</span>
            </div>
          </div>

          {/* Investment and Returns Summary */}
          <div className="text-lg font-semibold mb-6 text-center">
            <div className="flex justify-between">
              <span>Total Investment: </span>
              <span>₹ {investment.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Est. Returns: </span>
              <span>₹ {totalReturns.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Value: </span>
              <span>₹ {totalValue.toLocaleString()}</span>
            </div>
          </div>

          {/* Invest Now Button */}
          <div className="text-center">
            <button className="bg-green-500 text-white text-lg px-8 py-3 rounded-md">
              Invest Now
            </button>
          </div>
        </div>

        {/* Right section with Pie Chart */}
        <div className="w-1/3">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
