import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import '../../../css/charts.css'

export default function BarChart({ dataset_1 }) {
    ChartJS.register(ArcElement, BarElement, Tooltip, Legend);
    return (
        <div className="chartContainer">
            <Bar
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        dataset_1
                    ]
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true // Makes sure the Y-axis starts from 0
                        }
                    }
                }}
            />
        </div>
    )
}