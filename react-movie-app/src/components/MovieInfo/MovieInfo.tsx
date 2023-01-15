import React from 'react';
import { IMovie } from 'types';
import './MovieInfo.css';

interface IMovieInfoProps {
  movie: IMovie;
}
export default function MovieInfo({ movie }: IMovieInfoProps) {
  return (
    <div className="movie-info">
      <h3 className="movie-info__title">{movie.title}</h3>
      <p className="movie-info__overview">{movie.overview}</p>
      <div className="movie-info__grid">
        <div className="movie-info__column">
          <div className="movie-info__date">
            <h4 className="movie-info__subtitle">Release date: </h4>
            {movie.release_date}
          </div>
          <div className="movie-info__genres">
            <h4 className="movie-info__subtitle">Genres: </h4>
            {movie.genres.map((genreObj) => genreObj.name).join(', ')}
          </div>
        </div>
        <div className="movie-info__column">
          <div className="movie-info__language">
            <h4 className="movie-info__subtitle">Original language: </h4>
            {movie.original_language}
          </div>
          <div className="movie-info__rating">
            <h4 className="movie-info__subtitle">Rating: </h4>
            {movie.vote_average ? movie.vote_average.toFixed(1) : 'TBA'}
          </div>
        </div>
      </div>
      <div className="movie-info__runtime">{movie.runtime} min.</div>
    </div>
  );
}
