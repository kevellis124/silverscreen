export default class DataParser {
    seriesParse(resultFromApi) {
        const seasonCount = resultFromApi["totalSeasons"] != undefined ? parseInt(resultFromApi["totalSeasons"]) : 0;
        const seriesRating = resultFromApi["imdbRating"] != undefined ? parseFloat(resultFromApi["imdbRating"]) : 0;
        return {
            seasonCount: seasonCount,
            seriesRating: seriesRating
        }
    }

    episodeSetParser(episodeResultFromApi) {
        const episodeArray = episodeResultFromApi["Episodes"] != undefined ? episodeResultFromApi["Episodes"] : []
        return episodeArray.map((item) => {
            return {
                episodeNumber: parseInt(item["Episode"]),
                episodeRating: parseFloat(item["imdbRating"])
            }
        })
    }


}