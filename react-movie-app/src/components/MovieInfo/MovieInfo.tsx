import React from 'react';
import { IMovie } from 'types';
import './MovieInfo.css';

interface IMovieInfoProps {
  movie: IMovie;
}
export default class MovieInfo extends React.Component<IMovieInfoProps> {
  render() {
    return (
      <div className="movie-info">
        <h3 className="movie-info__title">{this.props.movie.title}</h3>
        <p className="movie-info__overview">{this.props.movie.overview}</p>
        <div className="movie-info__grid">
          <div className="movie-info__column">
            <div className="movie-info__date">
              <h4 className="movie-info__subtitle">Release date: </h4>
              {this.props.movie.release_date}
            </div>
            <div className="movie-info__genres">
              <h4 className="movie-info__subtitle">Genres: </h4>
              {this.props.movie.genres.map((genreObj) => genreObj.name).join(', ')}
            </div>
          </div>
          <div className="movie-info__column">
            <div className="movie-info__language">
              <h4 className="movie-info__subtitle">Original language: </h4>
              {this.props.movie.original_language}
            </div>
            <div className="movie-info__rating">
              <h4 className="movie-info__subtitle">Rating: </h4>
              {this.props.movie.vote_average ? this.props.movie.vote_average.toFixed(1) : 'TBA'}
            </div>
          </div>
        </div>
        <div className="movie-info__runtime">{this.props.movie.runtime} min.</div>
      </div>
    );
  }
}
