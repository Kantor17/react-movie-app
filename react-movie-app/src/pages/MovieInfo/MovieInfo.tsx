import React from 'react';
import Cast from './Cast';
import './MovieInfo.css';

export default function MovieInfo() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__backdrop">
          <img
            className="hero__backdrop-img"
            src="https://image.tmdb.org/t/p/original/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg"
            alt=""
          />
        </div>
        <div className="container hero__container">
          <div className="hero__column hero__poster-column">
            <img
              src="https://image.tmdb.org/t/p/original/602vevIURmpDfzbnv5Ubi6wIkQm.jpg"
              alt=""
              className="hero__poster"
            />
          </div>
          <div className="hero__column hero__content-column">
            <h1 className="hero__title">Drive</h1>
            <p className="hero__overview">
              Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for
              criminals. Though he projects an icy exterior, lately hes been warming up to a pretty
              neighbor named Irene and her young son, Benicio. When Irenes husband gets out of jail,
              he enlists Driver s help in a million-dollar heist. The job goes horribly wrong, and
              Driver must risk his life to protect Irene and Benicio from the vengeful masterminds
              behind the robbery.
            </p>
            <div className="hero__main-info main-info">
              <div className="main-info__row">
                <div className="main-info__duration iconed" title="Duration">
                  120 min.
                </div>
                <div className="main-info__director iconed" title="Director">
                  Christopher Nolan
                </div>
              </div>
              <div className="main-info__row">
                <div className="main-info__release-date iconed" title="Release date">
                  2022-10-10
                </div>
                <div className="main-info__genres iconed" title="Genres">
                  Action, History
                </div>
              </div>
            </div>
            <div className="hero__rating">8.7</div>
          </div>
        </div>
      </section>
      <Cast />
    </main>
  );
}
