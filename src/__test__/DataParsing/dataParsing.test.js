import React from 'react';
import DataParser from '../../DataParsing/dataParsing';

it('should exist', () => {
    let parser = new DataParser();
    expect(parser).not.toBe(null);
});

describe("Series Parser", () => {
   it('should exist', () => {
       let parser = new DataParser();
       expect(parser.seriesParse).toBeDefined()
   });

   it('should take a result from omdb and convert it into a useable object', () => {
      let parser = new DataParser();
      const input = {
          "Title": "Breaking Bad",
          "Year": "2008–2013",
          "Rated": "TV-MA",
          "Released": "20 Jan 2008",
          "Runtime": "49 min",
          "Genre": "Crime, Drama, Thriller",
          "Director": "N/A",
          "Writer": "Vince Gilligan",
          "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
          "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
          "Language": "English, Spanish",
          "Country": "USA",
          "Awards": "Won 2 Golden Globes. Another 144 wins & 225 nominations.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_SX300.jpg",
          "Ratings": [
              {
                  "Source": "Internet Movie Database",
                  "Value": "9.5/10"
              }
          ],
          "Metascore": "N/A",
          "imdbRating": "9.5",
          "imdbVotes": "1,124,115",
          "imdbID": "tt0903747",
          "Type": "series",
          "totalSeasons": "5",
          "Response": "True"
      };
      const expectedParsedResult = {
        seasonCount: 5,
        seriesRating: 9.5
      };
      const result = parser.seriesParse(input);
      expect(result).toMatchObject(expectedParsedResult);
   });
});

