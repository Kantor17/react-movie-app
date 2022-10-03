import React from 'react';
import './MovieCardsList.css';
import MovieCard, { IMovie } from '../MovieCard/MovieCard';

// just a mock, in future I will fetch data from API
const movies: Array<IMovie> = [
  {
    backdrop_path: '/jFp5aAlGQ1H3gwdORL2urr8dnoN.jpg',
    genres: ['History', 'Drama', 'War', 'Thriller'],
    id: 205596,
    original_language: 'en',
    overview:
      "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
    release_date: '2014',
    runtime: 113,
    title: 'The Imitation Game',
    vote_average: 8.014,
  },
  {
    backdrop_path: '/mfJepkInUbiZ0mFXFhDNz8ko6Zr.jpg',
    genres: ['Drama', 'Mystery', 'Sci-Fi'],
    id: 1124,
    original_language: 'en',
    overview:
      'A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.',
    release_date: '2006',
    title: 'The Prestige',
    runtime: 130,
    vote_average: 8.2,
  },
];

export default class MovieCardsList extends React.Component {
  render() {
    return (
      <div className="movie-cards-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
