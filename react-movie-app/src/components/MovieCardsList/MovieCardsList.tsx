import React from 'react';
import './MovieCardsList.css';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie, TCardType } from 'types';

interface IMovieCardsListProps {
  movies: IMovie[];
  type: TCardType;
}
export default function MovieCardsList({ movies, type }: IMovieCardsListProps) {
  return (
    <div className="movie-cards-list">
      {movies.length > 0 &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} type={type} />)}
    </div>
  );
}
