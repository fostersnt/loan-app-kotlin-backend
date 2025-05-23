import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import '../../../css/charts.css'

import React from 'react'
import { color } from "chart.js/helpers";

export default function DoughnutChart({dataset_1, dataset_2}) {
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <div className="chartContainer">
            <Doughnut
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        dataset_1, dataset_2
                    ],
                    // datasets: [
                    //     {
                    //         id: 1,
                    //         label: '',
                    //         data: [5, 6, 7],
                    //         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    //         borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    //         borderWidth: 1,
                    //     },
                    //     {
                    //         id: 2,
                    //         label: '',
                    //         data: [3, 2, 1],
                    //         backgroundColor: ["#4BC0C0", "#FF9F40", "#FFCD56"],
                    //         borderColor: ["#4BC0C0", "#FF9F40", "#FFCD56"],
                    //         borderWidth: 1
                    //     },
                    // ],
                }}
                fallbackContent={<div><h1>HELLO DOUGHNUT CHART</h1></div>}
            />
        </div>
    )
}