import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'New Signups',
        data: [10, 15, 9, 8, 12, 16, 14],
        fill: false,
        backgroundColor: 'teal',
        borderColor: 'teal',
      },
    ],
  };

  return (
    <div className="mt-4">
      <Line data={data} ref={chartRef} />
    </div>
  );
};

export default LineChart;
