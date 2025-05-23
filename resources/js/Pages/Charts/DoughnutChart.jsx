import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import '../../../css/charts.css'

export default function DoughnutChart({dataset_1, dataset_2}) {
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <div className="chartContainer">
            <Doughnut
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        dataset_1, dataset_2
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