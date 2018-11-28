import fetchShowDataOmdb from './Api';

export const searchForShow = (searchTerm) => (
    fetchShowDataOmdb(searchTerm)
        .then(json => json)
)

