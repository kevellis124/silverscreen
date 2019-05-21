import DatasetAggregator from '../../DataParsing/datasetAggregator';

describe('dataset aggregator', () => {
    it('should exist', () => {
       let datasetAggregator = new DatasetAggregator();
       expect(datasetAggregator).toBeDefined();
    });

    //TODO fix this test because the random colors are throwing it off

    // it('should take a set of episode data and return a chart dataset', () => {
    //     let datasetAggregator = new DatasetAggregator();
    //
    //     const input = {
    //         episodeData: [
    //             {episodeNumber: 1, episodeRating: 8.9},
    //             {episodeNumber: 2, episodeRating: 8.7},
    //             {episodeNumber: 3, episodeRating: 8.7},
    //             {episodeNumber: 4, episodeRating: 8.3},
    //             {episodeNumber: 5, episodeRating: 8.3},
    //             {episodeNumber: 6, episodeRating: 9.2},
    //             {episodeNumber: 7, episodeRating: 8.8}
    //             ],
    //         season: 1
    //     };
    //     const expectedResults = {
    //         label: 'Season 1',
    //         fill: false,
    //         backgroundColor: 'rgba(75,192,192,0.4)',
    //         pointBorderColor: 'rgba(75,192,192,1)',
    //         pointBackgroundColor: '#ff0000',
    //         pointBorderWidth: 10,
    //         pointHoverRadius: 10,
    //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //         pointHoverBorderColor: 'rgba(220,220,220,1)',
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         showLine: true,
    //         lineTension: 0,
    //         data: [
    //         { x: 1, y: 8.9 },
    //         { x: 2, y: 8.7 },
    //         { x: 3, y: 8.7 },
    //         { x: 4, y: 8.3 },
    //         { x: 5, y: 8.3 },
    //         { x: 6, y: 9.2 },
    //         { x: 7, y: 8.8 },
    //     ]
    //     };
    //     const results = datasetAggregator.makeDataSet(input);
    //     expect(results).toMatchObject(expectedResults);
    // });

    it('should override the x coordinate of the data sets to be sequential', () => {
        const datasetAggregator = new DatasetAggregator();
        const inputDataSets = {
            labels: [],
            datasets: [
                {
                    label: 'Season 1',
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
                    data: [
                        { x: 1, y: 8.9 },
                        { x: 2, y: 8.7 },
                        { x: 3, y: 8.7 },
                        { x: 4, y: 8.3 },
                        { x: 5, y: 8.3 },
                        { x: 6, y: 9.2 },
                        { x: 7, y: 8.8 },
                    ]
                }
            ]
        };
        const expectedDataSets = {
            labels: [],
            datasets: [
                {
                    label: 'Season 1',
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
                    data: [
                        { x: 9, y: 8.9 },
                        { x: 10, y: 8.7 },
                        { x: 11, y: 8.7 },
                        { x: 12, y: 8.3 },
                        { x: 13, y: 8.3 },
                        { x: 14, y: 9.2 },
                        { x: 15, y: 8.8 },
                    ]
                }
            ]
        };

        const results = datasetAggregator.setXCoordinatesOfData(inputDataSets);
        expect(results).toMatchObject(expectedDataSets);
    });

});