import { BASE_IMG_PATH } from 'API/constants';
import React, { useContext } from 'react';
import { GlobalContext } from 'store/globalContext';
import Loader from 'ui/Loader';
import Credits from './Credits';
import './MovieInfo.css';

export default function MovieInfo() {
  const { globalState } = useContext(GlobalContext);

  return globalState.detailsItem ? (
    <main className="main">
      <section className="hero">
        <div className="hero__backdrop">
          <img
            className="hero__backdrop-img"
            src={`${BASE_IMG_PATH}${globalState.detailsItem.backdrop_path}`}
            alt={`${globalState.detailsItem.title} backdrop`}
          />
        </div>
        <div className="container hero__container">
          <div className="hero__column hero__poster-column">
            <img
              src={`${BASE_IMG_PATH}${globalState.detailsItem.poster_path}`}
              alt={`${globalState.detailsItem.title} poster`}
              className="hero__poster"
            />
          </div>
          <div className="hero__column hero__content-column">
            <h1 className="hero__title">{globalState.detailsItem.title}</h1>
            <p className="hero__overview">{globalState.detailsItem.overview}</p>
            <div className="hero__main-info main-info">
              <div className="main-info__row">
                <div className="main-info__duration iconed" title="Duration">
                  {globalState.detailsItem.runtime} min.
                </div>
                <div className="main-info__director iconed" title="Director">
                  {globalState.detailsItem.credits?.crew?.find((item) => item.job === 'Director')
                    ?.name || '?'}
                </div>
              </div>
              <div className="main-info__row">
                <div className="main-info__release-date iconed" title="Release date">
                  {globalState.detailsItem.release_date || '?'}
                </div>
                <div className="main-info__genres iconed" title="Genres">
                  {globalState.detailsItem.genres?.map((genreObj) => genreObj.name).join(', ') ||
                    '?'}
                </div>
              </div>
            </div>
            <div className="hero__rating">{globalState.detailsItem.vote_average?.toFixed(1)}</div>
          </div>
        </div>
      </section>
      {globalState.detailsItem.credits?.cast && (
        <Credits people={globalState.detailsItem.credits?.cast} title="Cast" />
      )}
      {globalState.detailsItem.credits?.crew && (
        <Credits people={globalState.detailsItem.credits?.crew} title="Crew" />
      )}
    </main>
  ) : (
    <Loader />
  );
}
