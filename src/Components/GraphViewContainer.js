import React, { Component } from 'react';
import {Scatter} from 'react-chartjs-2';
import {searchForShow} from '../Api/NetworkAccess'

class GraphViewContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            graphTitle: "Movie/Show Title",
            graphData:  {},
            graphOptions: {},
            searchTerm: "Breaking Bad"
        };
    }

    render() {
        let graphData = {
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

        let graphOptions = {
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
                        suggestedMin: 0,
                        suggestedMax: 10,
                        beginAtZero: true
                    }
                }]
            }
        };

        return (
            <div>
                <Scatter data={graphData} options={graphOptions}/>
                <h1>{this.state.graphTitle}</h1>
                <textarea value={this.state.searchTerm} onChange={(event) => {this.setState({searchTerm: event.target.value});}}/>
                <button onClick={(event) => {searchForShow(this.state.searchTerm).then(json => console.log(json))}}>Submit</button>
            </div>)
    }
};

export default GraphViewContainer;