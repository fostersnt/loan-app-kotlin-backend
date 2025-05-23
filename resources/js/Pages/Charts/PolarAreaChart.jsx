import { Chart as ChartJS, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { Bar, PolarArea } from "react-chartjs-2";
import '../../../css/charts.css'

export default function PolarAreaChart({ dataset_1 }) {
    ChartJS.register(Tooltip, Legend, RadialLinearScale);
    return (
        <div className="chartContainer">
            <PolarArea
                // height={400}
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        {
                            label: 'My First Dataset',
                            data: [11, 16, 7, 3, 14],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(75, 192, 192)',
                                'rgb(255, 205, 86)',
                                'rgb(201, 203, 207)',
                                'rgb(54, 162, 235)'
                            ]
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    // scales: {
                    //     y: {
                    //         beginAtZero: true,
                    //         ticks: {
                    //             font: {
                    //                 family: 'Josefin Slab',
                    //                 size: 14,
                    //                 weight: 'bolder'
                    //             },
                    //         },
                    //     },
                    //     x: {
                    //         ticks: {
                    //             font: {
                    //                 family: 'Josefin Slab',
                    //                 size: 14,
                    //                 weight: 'bolder'
                    //             },
                    //         },
                    //     },
                    // },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Josefin Slab',
                                    size: 14,
                                    weight: 'bolder'
                                },
                            },
                        },
                        tooltip: {
                            titleFont: {
                                family: 'Josefin Slab',
                                weight: 'bolder'
                            },
                            bodyFont: {
                                family: 'Josefin Slab',
                                weight: 'bolder'
                            },
                        },
                    },
                }}

            />
        </div>
    )
}