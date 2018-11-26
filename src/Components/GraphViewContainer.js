import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;

class GraphViewContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            graphTitle: "Movie/Show Title",
            graphData: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            },
            graphOptions: {},
            searchTerm: ""
        };
    }

    render() {
        return (
            <div>
                <h1>The SILVER SCREEN</h1>
                <textarea value={this.state.searchTerm} onChange={(event) => {this.setState({searchTerm: event.target.value});}}/>
                <LineChart data={this.state.graphData} options={this.state.graphOptions} width="600" height="250" redraw/>
                <h1>{this.state.graphTitle}</h1>

            </div>)
    }
};

export default GraphViewContainer;