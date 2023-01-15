import MovieInfo from 'components/MovieInfo';
import React, { useState } from 'react';
import { IMovie } from 'types';
import Modal from 'ui/Modal';
import './MovieCard.css';
import backdropPlaceholder from '../../assets/img/backdrop-placeholder.jpg';

interface IMovieCardProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: IMovieCardProps) {
  const [isModal, setModal] = useState(false);

  function getImageSrc() {
    const imagePath = movie.backdrop_path;
    if (!imagePath) return backdropPlaceholder;
    if (imagePath.includes('blob')) return imagePath;
    const BASE_IMG_PATH = 'https://image.tmdb.org/t/p/original';
    return BASE_IMG_PATH + imagePath;
  }

  return (
    <>
      <div className="movie-card" onClick={() => setModal(true)} data-testid="movie-card">
        <div className="movie-card__poster">
          <img src={getImageSrc()} alt={`${movie.title} backdrop image`} className="bg-img" />
        </div>
        <h3 className="movie-card__title">
          <span className="movie-card__name">{movie.title} </span>
          <span className="movie-card__release-date">
            ({movie.release_date ? movie.release_date.slice(0, 4) : 'TBA'})
          </span>
        </h3>
        <div className="movie-card__more-container">
          <p className="movie-card__more-text">Click to see more</p>
        </div>
      </div>
      {isModal && (
        <Modal closeCb={() => setModal(false)}>
          <MovieInfo movie={movie} />
        </Modal>
      )}
    </>
  );
}
