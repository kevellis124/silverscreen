import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;

class GraphViewContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            graphTitle: "Movie/Show Title",
            graphData: {
                labels: [],
                datasets: []
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