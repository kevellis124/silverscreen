export default class DataParser {
    seriesParse(resultFromApi) {
        return {
            seasonCount: parseInt(resultFromApi["totalSeasons"]),
            seriesRating: parseFloat(resultFromApi["imdbRating"])
        }
    }
}