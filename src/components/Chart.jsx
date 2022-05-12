import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Cırculating', 'Coin Burn'],
  datasets: [
    {
      data: [51.06, 48.94],
      backgroundColor: [
        '#9a0680',
        '#052a6e',
      ],
      borderWidth: 0,
    },
  ],
};

export default function Chart2() {
  return (
   <div className="doughunt">
      <Doughnut className='donut' data={data} />
   </div>
  );
}