import { BASE_IMG_PATH } from 'API/constants';
import backgroundPlaceholder from '../../assets/img/background-placeholder.jpg';
import posterPlaceholder from '../../assets/img/poster-placeholder.jpg';
import getMovieDetails from 'API/queries/getMovieDetails';
import DetailsHeader from 'components/DetailsHeader';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IMovieDetails } from 'types';
import Loader from 'ui/Loader';
import Credits from './Credits';
import './MovieDetails.css';
import { useTypedDispatch } from 'hooks/reduxHooks';
import { changeError } from 'store/slices/searchSlice';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const idParam = useParams().id;
  const movieId = idParam?.slice(1, idParam.length);

  useEffect(() => {
    async function getData() {
      if (movieId) {
        try {
          setMovieDetails(await getMovieDetails(movieId, ['credits']));
        } catch (err) {
          navigate('/');
          dispatch(changeError(err as Error));
        }
      } else {
        navigate('/');
      }
    }
    getData();
  }, [navigate, movieId, dispatch]);

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
            <h1 className="hero__title" onClick={() => navigate(-1)}>
              {movieDetails.title}
            </h1>
            <p className="hero__overview">{movieDetails.overview}</p>
            <div className="hero__main-info main-info">
              <div className="main-info__row">
                <div className="main-info__duration iconed" title="Duration">
                  {movieDetails.runtime ? `${movieDetails.runtime} min.` : '?'}
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
      {movieDetails.credits.cast.length > 0 && (
        <Credits people={movieDetails.credits?.cast} title="Cast" />
      )}
      {movieDetails.credits.crew.length > 0 && (
        <Credits people={movieDetails.credits?.crew} title="Crew" />
      )}
    </div>
  ) : (
    <div className="loader-container">
      <Loader />
    </div>
  );
}
