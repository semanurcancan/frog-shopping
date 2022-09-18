import React from "react";
//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);



const VerticalChart = () => {

    return <div>
        <Line
        className="vertical"
            data={{
                labels: ['Germany', 'Italy', 'France'],
                datasets: [
                    {
                        label: 'EXPORT',
                        data: [12, 34, 32],
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
                        borderWidth: 2,
                    },
                    {
                        label: 'IMPORT',
                        data: [28, 34, 67],
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
                        borderWidth: 2,
                    }
                ]
            }}
            height={400}
            width={600}
            type='Bar'
            options={{
                maintainAspectRatio: true,
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
export default VerticalChart;