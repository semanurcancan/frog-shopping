import React from "react";
import { Bar } from 'react-chartjs-2';

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
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
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

const BarChart = (props) => {
    let labels = []
    if (!!props.salesList) {
        labels = [...new Set(props.salesList.map(item => item.date))]
    }
    let data = Array(labels.length).fill(0)
    props.salesList.forEach(element => {
        let index = labels.indexOf(element.date)
        console.log(index)
        data[index] += parseInt(element.price.replace(/[^0-9\.]+/g, ''))
    });


    return <div>
        <Bar
            data={{
                labels: labels,
                datasets: [
                    {
                        label: 'SALE',
                        data: data,
                        backgroundColor: ['rgba(72, 201, 176 , 0.4)',],
                        borderColor: ['rgba(72, 201, 176 , 1)'],
                        borderWidth: 2,
                    }
                ]
            }}
            responsive={true}
            height={400}
            width={600}
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
export default BarChart