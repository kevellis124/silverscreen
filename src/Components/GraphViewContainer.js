import React, { Component } from 'react';
import {Scatter} from 'react-chartjs-2';
import DataParser from '../DataParsing/dataParsing';
import DatasetAggregator from '../DataParsing/datasetAggregator';
import Api from '../Api/Api';
import Loader from 'react-loader-spinner';
import {sampleGraphOptions} from '../SampleData';

const parser = new DataParser();
const aggregator = new DatasetAggregator();
class GraphViewContainer extends Component {

    constructor(props){

        super(props);
        this.state = {
            graphTitle: "Movie/Show Title",
            graphData:  {},
            graphOptions: sampleGraphOptions,
            searchTerm: "Breaking Bad",
            loading: false
        };
    }

    handleTitleSearch = () => {
        this.setState({loading:true});
        //move this logic
        Api.fetchShowDataOmdb(this.state.searchTerm)
            .then(json => parser.seriesParse(json))
            .then(parsedSeriesResponse => aggregator.takeSeriesInfoAndReturnEpisodeData(parsedSeriesResponse))
            .then(seasons => {
                return {
                    labels: [],
                    datasets: seasons
                }
            })
            .then(dataSets => aggregator.setXCoordinatesOfData(dataSets))
            .then(graphData => this.setState({
                graphData: graphData,
                loading:false
            }));
    };

    render() {
        //set the graph data for development. Will remove later.

        // var divStyle = {
        //     float: 'left',
        //     width: '50%'
        // };

        return (
            <div>
                {this.state.loading && <Loader type="Circles" color="#3D77FF" height={80} width={80}/>}
                {!this.state.loading && <Scatter data={this.state.graphData} options={this.state.graphOptions}/>}
                <h1>{this.state.graphTitle}</h1>
                <textarea value={this.state.searchTerm} onChange={(event) => {this.setState({searchTerm: event.target.value});}}/>
                <button disabled={this.state.loading} onClick={this.handleTitleSearch}>Submit</button>
                <h1 style={{fontSize : '100px'}} >BETA</h1>
            </div>)
    }
}

export default GraphViewContainer;