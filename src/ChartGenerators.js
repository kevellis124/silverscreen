export const generateDataSets = (data) => {
    const dataPoints = data.episodes.map(episode => return { x: initialX++, y: episode.imdbRating})
    
    const dataPoints = data.episodes.map((episode) => {

    })

  return {
      label: `Season ${data.seasonNumber}`,
      fill: false,
      backgroundColor: '#ff0000',
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
};