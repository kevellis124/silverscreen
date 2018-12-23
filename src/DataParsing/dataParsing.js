export default class DataParser {
    seriesParse(resultFromApi) {
        //error handling?
        const seasonCount = resultFromApi["totalSeasons"] !== undefined ? parseInt(resultFromApi["totalSeasons"]) : 0;
        const seriesRating = resultFromApi["imdbRating"] !== undefined ? parseFloat(resultFromApi["imdbRating"]) : 0;
        const seriesName = resultFromApi["Title"] !== undefined ? resultFromApi["Title"] : "";
        return {
            seriesName: seriesName,
            seasonCount: seasonCount,
            seriesRating: seriesRating
        }
    }

    episodeSetParser(episodeResultFromApi) {
        const episodeArray = episodeResultFromApi["Episodes"] !== undefined ? episodeResultFromApi["Episodes"] : []
        return {
            episodeData: episodeArray.map((item) => {
                return {
                    episodeNumber: parseInt(item["Episode"]),
                    episodeRating: parseFloat(item["imdbRating"])
                }
            }),
            season: parseInt(episodeResultFromApi["Season"])
        }
    }


}