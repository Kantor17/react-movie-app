import MovieInfo from 'components/MovieInfo';
import React, { useContext, useState } from 'react';
import { EActionTypes, IMovie, TCardType } from 'types';
import Modal from 'ui/Modal';
import './MovieCard.css';
import backdropPlaceholder from '../../assets/img/backdrop-placeholder.jpg';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'store/globalContext';
import { BASE_IMG_PATH } from 'API/constants';

interface IMovieCardProps {
  movie: IMovie;
  type: TCardType;
}

export default function MovieCard({ movie, type }: IMovieCardProps) {
  const [isModal, setModal] = useState(false);

  const navigate = useNavigate();
  const { globalDispatch } = useContext(GlobalContext);

  function getImageSrc() {
    const imagePath = movie.backdrop_path;
    if (!imagePath) return backdropPlaceholder;
    if (imagePath.includes('blob')) return imagePath;
    return BASE_IMG_PATH + imagePath;
  }

  function showDetails() {
    switch (type) {
      case 'searched': {
        globalDispatch({ type: EActionTypes.REPLACE_DETAILS_ITEM, payload: movie });
        navigate('/details');
        break;
      }
      case 'idea': {
        setModal(true);
        break;
      }
    }
  }

  return (
    <>
      <div className="movie-card" onClick={() => showDetails()} data-testid="movie-card">
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
