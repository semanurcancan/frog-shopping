import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const Doughnutt = () => {

    return <div>
        <Doughnut
        className='w-full h-full '
            data={{
                labels: ['Germany', 'Italy', 'France'],
                datasets: [
                    {
                        label: '# STOCKS',
                        data: [12, 19, 22,33],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(142, 68, 173, 0.4)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                        ],
                        borderWidth: 1,
                    },
                ]
            }}
            height={600}
            width={700}
            type='Bar'
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}

        />
    </div>
}
export default Doughnutt

