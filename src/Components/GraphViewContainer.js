import React, { PureComponent } from 'react';
var LineChart = require("react-chartjs").Line;

class GraphViewContainer extends PureComponent {
    render() {
        var chartData = {
            labels: [],
            datasets: []
        };
        var chartOptions = {};
        return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
    }
};

export default GraphViewContainer;