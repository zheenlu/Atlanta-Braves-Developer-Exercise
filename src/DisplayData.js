import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DisplayData({ data }) {
    const [page, setPage] = useState(0); // Track the current page
    const itemsPerPage = 20;

    // Calculate the data for the current page
    const currentData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
    const totalItems = data.length;

    const chartData = {
        labels: currentData.map((item) => item.BATTER),
        datasets: [
            {
                label: 'Exit Speed (mph)',
                data: currentData.map((item) => item.EXIT_SPEED),
                backgroundColor: '#CE1141', // Solid Scarlet color for visibility
                borderColor: '#CE1141',
                borderWidth: 1,
                barThickness: 15,
            },
            {
                label: 'Launch Angle (degrees)',
                data: currentData.map((item) => item.LAUNCH_ANGLE),
                backgroundColor: '#13274F', // Solid Navy color
                borderColor: '#13274F',
                borderWidth: 1,
                barThickness: 15,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
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
                text: `Displaying ${Math.min((page + 1) * itemsPerPage, totalItems)} out of ${totalItems} Batters`,
                font: {
                    family: 'Arial, sans-serif',
                    size: 18,
                },
                padding: {
                    bottom: 40,
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
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Batter',
                    font: {
                        family: 'Arial, sans-serif',
                        size: 14,
                    },
                },
                ticks: {
                    maxRotation: 30,
                    minRotation: 30,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Speed/Angle',
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
    };

    // Handler for navigating pages
    const handlePrevPage = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNextPage = () => {
        if ((page + 1) * itemsPerPage < data.length) setPage(page + 1);
    };

    return (
        <div className="chart-wrapper" style={{ position: 'relative', marginBottom: '80px' }}> {/* Increased marginBottom */}
            <div className="chart-container" style={{ marginBottom: '60px' }}> {/* Adjusted margin */}
                <Bar data={chartData} options={options} />
            </div>
            <div className="pagination-controls" style={{ marginTop: '20px', textAlign: 'center', zIndex: 10 }}>
                <button
                    onClick={handlePrevPage}
                    disabled={page === 0}
                    style={{ marginRight: '10px', padding: '10px 20px' }}>
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={(page + 1) * itemsPerPage >= data.length}
                    style={{ padding: '10px 20px' }}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default DisplayData;
