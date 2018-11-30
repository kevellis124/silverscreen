import DataParser from './dataParsing';

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
            tooltipTemplate: "adsf",
            data: data
        }
    }
}
