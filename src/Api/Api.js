import 'whatwg-fetch';


const omdbUrl = 'http://www.omdbapi.com'
const apiKey = '558dbe92';

class Api {
    static fetchShowDataOmdb = (searchTerm) => {
        const seriesUrlString = `${omdbUrl}/?t=${searchTerm}&apikey=${apiKey}`;

        return fetch(seriesUrlString)
            .then(response => response.json())
    };

    static fetchSeasonInfoOmdb = (searchTerm, seasonNumber) => {
        const seasonUrlString = `${omdbUrl}/?t=${searchTerm}&Season=${seasonNumber}&apikey=${apiKey}`;

        return fetch(seasonUrlString)
            .then(response => response.json())
    }
}


export default Api;