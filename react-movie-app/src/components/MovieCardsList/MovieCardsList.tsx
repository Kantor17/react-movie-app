import React from 'react';
import './MovieCardsList.css';
import MovieCard from '../MovieCard/MovieCard';
import { movies } from 'data/movies';

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
