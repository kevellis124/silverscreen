export const breakingBadData = {
    labels: [],
    datasets: [
        {
            label: 'Season 1',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            showLine: true,
            lineTension: 0,
            tooltipTemplate: "adsf",
            data: [
                { x: 1, y: 8.9 },
                { x: 2, y: 8.7 },
                { x: 3, y: 8.7 },
                { x: 4, y: 8.3 },
                { x: 5, y: 8.3 },
                { x: 6, y: 9.2 },
                { x: 7, y: 8.8 },
            ]
        },
        {
            label: 'Season 2',
            fill: false,
            backgroundColor: '#ff0000',
            pointBorderColor: '#ff0000',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            showLine: true,
            lineTension: 0,
            tooltipTemplate: "adsf",
            data: [
                { x: 8, y: 8.9 },
                { x: 9, y: 8.7 },
                { x: 10, y: 8.7 },
                { x: 11, y: 8.3 },
                { x: 12, y: 8.3 },
                { x: 13, y: 9.2 },
                { x: 14, y: 8.8 },
            ]
        }
    ]
};

export const sampleGraphOptions = {
    title: {
        display: true,
        text: 'The Silver Screen'

    },
    tooltips: {
        callbacks: {
            label: function (t, d) {
                return d.datasets[t.datasetIndex].label + " Episode " + t.xLabel
            }
        }
    },
    scales: {
        yAxes: [{
            ticks: {display:true,
                suggestedMin: 3,
                suggestedMax: 10,
                beginAtZero: true
            }
        }]
    }
};