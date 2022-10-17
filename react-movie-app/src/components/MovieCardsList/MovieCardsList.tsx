import React from 'react';
import './MovieCardsList.css';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from 'types';

interface IMovieCardsListProps {
  movies: IMovie[];
  isLoading: boolean;
}
export default class MovieCardsList extends React.Component<IMovieCardsListProps> {
  render() {
    return (
      <div className="movie-cards-list">
        {this.props.movies.length > 0 &&
          this.props.movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        {this.props.movies.length <= 0 && !this.props.isLoading && (
          <p className="no-movies-msg">Sorry, no movies found.</p>
        )}
      </div>
    );
  }
}
