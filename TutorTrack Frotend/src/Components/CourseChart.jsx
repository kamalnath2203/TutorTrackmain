import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const CourseChart = () => {
  const data = {
    labels: ['Advanced java', 'Python', 'AIML', 'DSA', 'Embedded systems'],
    datasets: [
      {
        label: 'Course Distribution',
        data: [20, 30, 15, 25, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ': ' + context.raw + '%';
          },
        },
      },
    },
  };

  return (
    <div>
      <h3>Course Distribution Chart</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CourseChart;
