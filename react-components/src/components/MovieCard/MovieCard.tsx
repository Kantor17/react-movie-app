import React from 'react';
import { IMovie } from 'types';
import './MovieCard.css';

interface MovieCardProps {
  movie: IMovie;
}

const BACKDROP_DEFAULT_PATH = 'https://image.tmdb.org/t/p/original/';

export default class MovieCard extends React.Component<MovieCardProps> {
  render() {
    return (
      <div className="movie-card">
        <div className="movie-card__poster">
          <img
            src={`${BACKDROP_DEFAULT_PATH}${this.props.movie.backdrop_path}`}
            alt={`${this.props.movie.title} backdrop image`}
            className="bg-img"
          />
        </div>
        <div className="movie-card__info">
          <h3 className="movie-card__title">
            <span className="movie-card__name">{this.props.movie.title} </span>
            <span className="movie-card__release-date">({this.props.movie.release_date})</span>
          </h3>
          <p className="movie-card__genres">{this.props.movie.genres.join(' ')}</p>
          <p className="movie-card__overview">{this.props.movie.overview}</p>
          <p className="movie-card__runtime">{this.props.movie.runtime} min.</p>
          <div className="movie-card__rating badge">{this.props.movie.vote_average.toFixed(1)}</div>
          <div className="movie-card__language badge">{this.props.movie.original_language}</div>
        </div>
      </div>
    );
  }
}
