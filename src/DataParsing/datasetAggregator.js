import DataParser from './dataParsing';
import Api from '../Api/Api';
const parser = new DataParser();
export default class DatasetAggregator {
    makeDataSet(seasonData) {
        const data = seasonData["episodeData"].map((item) => {
            {
                return {
                    x: item["episodeNumber"],
                    y: item["episodeRating"]
                }
            }
        });
        return {
            label: `Season ${seasonData["season"]}`,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#ff0000',
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            showLine: true,
            lineTension: 0,
            data: data
        }
    }

    takeSeriesInfoAndReturnEpisodeData(parsedSeriesInfo) {
        return this.fetchAllEpisodesForSeries(parsedSeriesInfo)
            .then(values => values.map((json) => parser.episodeSetParser(json)))
            .then(values => {
                let dataSets = [];
                values.forEach((season) => {
                    dataSets.push(this.makeDataSet(season))
                });
                return dataSets;
            });
    }

    fetchAllEpisodesForSeries(parsedSeriesInfo) {
        let seasonsOfEpisodes = [];
        for (let i = 0; i < parsedSeriesInfo.seasonCount; i++) {
            seasonsOfEpisodes[i] = {
                season: i + 1
            };
        }

        return Promise.all(seasonsOfEpisodes.map((item) => {
            return Api.fetchSeasonInfoOmdb(parsedSeriesInfo.seriesName, item.season)
        }));
    }

    setXCoordinatesOfData(graphData) {
        let runningCoordinateCount = 1;
        //iterate through seasons and begin incrementing the X coordinate with
        //one number skipped between seasons
        console.log(graphData["datasets"]);
        graphData.datasets.forEach((set) => {
           set["data"].forEach((coordinate) => {
               coordinate["x"] = runningCoordinateCount;
               runningCoordinateCount = runningCoordinateCount + 1;
           } );

            runningCoordinateCount = runningCoordinateCount + 1;
        });
        return graphData;
    }
}
