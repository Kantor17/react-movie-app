import React from 'react';
import './MovieCardsList.css';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from 'types';

interface IMovieCardsListProps {
  movies: IMovie[];
}
export default function MovieCardsList({ movies }: IMovieCardsListProps) {
  return (
    <div className="movie-cards-list">
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}
