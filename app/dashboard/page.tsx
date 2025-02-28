"use client"

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold">$56,789</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Active Projects</h2>
          <p className="text-3xl font-bold">23</p>
        </div>
      </div>
      <div className="mt-6">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
