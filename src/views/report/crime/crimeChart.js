import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left'
    },
    title: {
      display: true,
      text: 'Arrests'
    }
  }
};

const labels = ['2009', '2011', '2013', '2015', '2017', '2019', '2021'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Local',
      data: labels.map(() => Math.floor(Math.random() * 10)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
};

export function CrimeChart() {
  return <Line options={options} data={data} />;
}
