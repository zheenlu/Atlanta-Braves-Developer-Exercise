import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function LaunchAngleVsDistanceChart({ data }) {
    const chartData = {
        datasets: [
            {
                label: 'Hit Distance vs Launch Angle',
                data: data.map((item) => ({
                    x: item.LAUNCH_ANGLE,
                    y: item.HIT_DISTANCE,
                    outcome: item.PLAY_OUTCOME
                })),
                backgroundColor: '#CE1141',
                borderColor: '#13274F',
                pointRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Launch Angle (degrees)',
                    font: {
                        family: 'Arial, sans-serif',
                        size: 14,
                    },
                },
                grid: {
                    display: false,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Hit Distance (feet)',
                    font: {
                        family: 'Arial, sans-serif',
                        size: 14,
                    },
                },
                beginAtZero: true,
                grid: {
                    color: '#e0e0e0',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        family: 'Arial, sans-serif',
                        size: 12,
                    },
                },
            },
            tooltip: {
                backgroundColor: '#333',
                titleFont: {
                    family: 'Arial, sans-serif',
                    size: 14,
                },
                bodyFont: {
                    family: 'Arial, sans-serif',
                    size: 12,
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <Scatter data={chartData} options={options} />
        </div>
    );
}

export default LaunchAngleVsDistanceChart;
