"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [33, 53, 85, 41, 44, 65, 72],
      fill: false,
      backgroundColor: '#1C64F2',
      borderColor: '#1C64F2',
      pointBackgroundColor: '#ff6384', // Custom point color
      pointBorderColor: '#ff6384',
      pointBorderWidth: 3, // Custom point border width
      pointHoverBackgroundColor: '#ffce56', // Point color on hover
      pointHoverBorderColor: '#ff6384',
      pointHoverBorderWidth: 5, // Border width on hover
      pointRadius: 6, // Point size
      pointHoverRadius: 8, // Hovered point size
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
      text: 'Sales Over Time',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Chart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default Chart;
