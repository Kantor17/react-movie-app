import { BASE_IMG_PATH } from 'API/constants';
import backgroundPlaceholder from '../../assets/img/background-placeholder.jpg';
import posterPlaceholder from '../../assets/img/poster-placeholder.jpg';
import getMovieDetails from 'API/queries/getMovieDetails';
import DetailsHeader from 'components/DetailsHeader';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'store/globalContext';
import { IMovieDetails } from 'types';
import Loader from 'ui/Loader';
import Credits from './Credits';
import './MovieDetails.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const { globalState } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      if (globalState.selectedMovieId) {
        setMovieDetails(await getMovieDetails(globalState.selectedMovieId, ['credits']));
      } else {
        navigate('/');
      }
    }
    getData();
  }, [globalState.selectedMovieId, navigate]);

  return movieDetails ? (
    <div className="movie-details">
      <section className="hero">
        <DetailsHeader />
        <div className="hero__backdrop">
          <img
            className="hero__backdrop-img"
            src={
              movieDetails.backdrop_path
                ? `${BASE_IMG_PATH}${movieDetails.backdrop_path}`
                : backgroundPlaceholder
            }
            alt={`${movieDetails.title} backdrop`}
          />
        </div>
        <div className="container hero__container">
          <div className="hero__column hero__poster-column">
            <img
              src={
                movieDetails.poster_path
                  ? `${BASE_IMG_PATH}${movieDetails.poster_path}`
                  : posterPlaceholder
              }
              alt={`${movieDetails.title} poster`}
              className="hero__poster"
            />
          </div>
          <div className="hero__column hero__content-column">
            <h1 className="hero__title">{movieDetails.title}</h1>
            <p className="hero__overview">{movieDetails.overview}</p>
            <div className="hero__main-info main-info">
              <div className="main-info__row">
                <div className="main-info__duration iconed" title="Duration">
                  {movieDetails.runtime} min.
                </div>
                <div className="main-info__director iconed" title="Director">
                  {movieDetails.credits?.crew?.find((item) => item.job === 'Director')?.name || '?'}
                </div>
              </div>
              <div className="main-info__row">
                <div className="main-info__release-date iconed" title="Release date">
                  {movieDetails.release_date || '?'}
                </div>
                <div className="main-info__genres iconed" title="Genres">
                  {movieDetails.genres?.map((genreObj) => genreObj.name).join(', ') || '?'}
                </div>
              </div>
            </div>
            <div className="hero__rating">{movieDetails.vote_average?.toFixed(1)}</div>
          </div>
        </div>
      </section>
      {movieDetails.credits?.cast && <Credits people={movieDetails.credits?.cast} title="Cast" />}
      {movieDetails.credits?.crew && <Credits people={movieDetails.credits?.crew} title="Crew" />}
    </div>
  ) : (
    <Loader />
  );
}
