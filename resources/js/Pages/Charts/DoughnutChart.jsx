import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import '../../../css/charts.css'

import React from 'react'

export default function DoughnutChart() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <div className="chartContainer">
            <Doughnut
            datasetIdKey='id'
            data={{
                labels: ['Jun', 'Jul', 'Aug'],
                datasets: [
                    {
                        id: 1,
                        label: '',
                        data: [5, 6, 7],
                    },
                    {
                        id: 2,
                        label: '',
                        data: [3, 2, 1],
                    },
                ],
            }}
        />
        </div>
    )
}