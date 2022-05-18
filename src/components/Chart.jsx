import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Development', 'Marketing', 'Charity', 'Liquidity'],
  datasets: [
    {
      data: [1, 5, 5, 5],
      backgroundColor: [
        '#3AFBA0',
        '#9a0680',
        '#052a6e',
        '#FF8139'
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