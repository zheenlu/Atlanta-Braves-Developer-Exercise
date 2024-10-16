import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PlayOutcomeChart({ data }) {
    const outcomes = data.map(item => item.PLAY_OUTCOME);
    const outcomeCounts = outcomes.reduce((acc, outcome) => {
        acc[outcome] = (acc[outcome] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(outcomeCounts),
        datasets: [
            {
                label: 'Play Outcomes',
                data: Object.values(outcomeCounts),
                backgroundColor: [
                    '#CE1141',
                    '#13274F',
                    '#EAAA00',
                    '#FFC300',
                    '#FF5733',
                    '#1F618D',
                    '#900C3F',
                    '#581845',
                    '#DAF7A6',
                ],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        family: 'Arial, sans-serif',
                        size: 12,
                    },
                    color: '#333',
                },
            },
            title: {
                display: true,
                text: 'Play Outcome Distribution',
                font: {
                    family: 'Arial, sans-serif',
                    size: 18,
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
        elements: {
            arc: {
                borderWidth: 1,
            },
        },
    };

    return (
        <div className="chart-container">
            <Pie data={chartData} options={options} />
        </div>
    );
}

export default PlayOutcomeChart;
