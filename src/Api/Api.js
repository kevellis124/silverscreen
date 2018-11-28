import 'whatwg-fetch';


const omdbUrl = 'http://www.omdbapi.com'
const apiKey = '558dbe92';

const fetchShowDataOmdb = (searchTerm) => (
    fetch(`${omdbUrl}/?t=${searchTerm}&apikey=${apiKey}`)
        .then(response => response.json())
);

export default fetchShowDataOmdb;