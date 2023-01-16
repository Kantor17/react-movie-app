import React from 'react';
import { IMovie } from 'types';
import backdropPlaceholder from '../../../assets/img/backdrop-placeholder.jpg';
import { useNavigate } from 'react-router-dom';
import { BASE_IMG_PATH } from 'API/constants';
import '../MovieCard.css';

interface ISearchedMovieCardProps {
  movie: IMovie;
}

export default function SearchedMovieCard({ movie }: ISearchedMovieCardProps) {
  const navigate = useNavigate();

  function showDetails() {
    navigate(`/details/:${movie.id}`);
  }

  return (
    <div className="movie-card" onClick={() => showDetails()} data-testid="movie-card">
      <div className="movie-card__poster">
        <img
          src={movie.backdrop_path ? `${BASE_IMG_PATH}${movie.backdrop_path}` : backdropPlaceholder}
          alt={`${movie.title} backdrop image`}
          className="bg-img"
        />
      </div>
      <h3 className="movie-card__title">
        <span className="movie-card__name">{movie.title}</span>
        <span className="movie-card__release-date">
          ({movie.release_date ? movie.release_date.slice(0, 4) : 'TBA'})
        </span>
      </h3>
      <div className="movie-card__more-container">
        <p className="movie-card__more-text">Click to see more</p>
      </div>
    </div>
  );
}
