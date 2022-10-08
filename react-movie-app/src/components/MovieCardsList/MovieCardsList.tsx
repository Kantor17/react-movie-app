import React from 'react';
import uuid from 'react-uuid';
import './MovieCardsList.css';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from 'types';

interface IMovieCardsListProps {
  movies: IMovie[];
}
export default class MovieCardsList extends React.Component<IMovieCardsListProps> {
  render() {
    return (
      <div className="movie-cards-list">
        {this.props.movies.map((movie) => (
          <MovieCard key={movie.id || uuid()} movie={movie} />
        ))}
      </div>
    );
  }
}
