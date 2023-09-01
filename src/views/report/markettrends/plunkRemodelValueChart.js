import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked'
    }
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false
  },
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 40)),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0'
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0'
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1'
    },
    {
      label: 'Dataset 4',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: 'rgb(53, 62, 135)',
      stack: 'Stack 1'
    }
  ]
};

export function PlunkReModelValueChart() {
  return <Bar options={options} data={data} />;
}
