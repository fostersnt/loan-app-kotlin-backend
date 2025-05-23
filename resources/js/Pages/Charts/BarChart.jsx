import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import '../../../css/charts.css'

export default function BarChart({ dataset_1 }) {
    ChartJS.register(ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale);
    return (
        <div className="chartContainer">
            <Bar
                // height={400}
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        {
                            label: 'Active Users',
                            data: [3, 2, 1],
                            backgroundColor: ["#4BC0C0"],
                            // borderColor: ["#FF9F40"],
                            borderWidth: 1
                        },
                        {
                            label: 'Deleted Users',
                            data: [5, 3, 4],
                            backgroundColor: ['#FF6384'],
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                font: {
                                    family: 'Josefin Slab',
                                    size: 14,
                                    weight: 'bolder'
                                },
                            },
                        },
                        x: {
                            ticks: {
                                font: {
                                    family: 'Josefin Slab',
                                    size: 14,
                                    weight: 'bolder'
                                },
                            },
                        },
                    },
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