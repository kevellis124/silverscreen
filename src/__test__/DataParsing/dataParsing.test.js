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
        seriesName: "Breaking Bad",
        seasonCount: 5,
        seriesRating: 9.5
      };
      const result = parser.seriesParse(input);
      expect(result).toMatchObject(expectedParsedResult);
   });

   it('should return an empty object if the input is invalid', () => {
       let parser = new DataParser();
       const invalidInput = {
           "this is invalid": "still invalid"
       };

       const expectedParsedResult = {
           seriesName: "",
           seasonCount: 0,
           seriesRating: 0
       };
       const result = parser.seriesParse(invalidInput);
       expect(result).toMatchObject(expectedParsedResult);

   })
});

describe("DataSet creation", () => {
    it('should exist', () => {
       let parser = new DataParser();
       expect(parser.episodeSetParser).toBeDefined();
    });

    it('should take a valid result from the season api result and convert to a dataset for a season', () => {
        let parser = new DataParser();
        const input = {
            "Title": "Breaking Bad",
            "Season": "1",
            "totalSeasons": "5",
            "Episodes": [
                {
                    "Title": "Pilot",
                    "Released": "2008-01-20",
                    "Episode": "1",
                    "imdbRating": "8.9",
                    "imdbID": "tt0959621"
                },
                {
                    "Title": "Cat's in the Bag...",
                    "Released": "2008-01-27",
                    "Episode": "2",
                    "imdbRating": "8.7",
                    "imdbID": "tt1054724"
                },
                {
                    "Title": "...And the Bag's in the River",
                    "Released": "2008-02-10",
                    "Episode": "3",
                    "imdbRating": "8.7",
                    "imdbID": "tt1054725"
                },
                {
                    "Title": "Cancer Man",
                    "Released": "2008-02-17",
                    "Episode": "4",
                    "imdbRating": "8.3",
                    "imdbID": "tt1054726"
                },
                {
                    "Title": "Gray Matter",
                    "Released": "2008-02-24",
                    "Episode": "5",
                    "imdbRating": "8.3",
                    "imdbID": "tt1054727"
                },
                {
                    "Title": "Crazy Handful of Nothin'",
                    "Released": "2008-03-02",
                    "Episode": "6",
                    "imdbRating": "9.2",
                    "imdbID": "tt1054728"
                },
                {
                    "Title": "A No-Rough-Stuff-Type Deal",
                    "Released": "2008-03-09",
                    "Episode": "7",
                    "imdbRating": "8.8",
                    "imdbID": "tt1054729"
                }
            ],
            "Response": "True"
        };
        const expectedResponse = {episodeData: [
            {episodeNumber: 1, episodeRating: 8.9},
            {episodeNumber: 2, episodeRating: 8.7},
            {episodeNumber: 3, episodeRating: 8.7},
            {episodeNumber: 4, episodeRating: 8.3},
            {episodeNumber: 5, episodeRating: 8.3},
            {episodeNumber: 6, episodeRating: 9.2},
            {episodeNumber: 7, episodeRating: 8.8}
        ],
            season: 1
        };
        const result = parser.episodeSetParser(input);
        expect(result).toMatchObject(expectedResponse);
    });
});
