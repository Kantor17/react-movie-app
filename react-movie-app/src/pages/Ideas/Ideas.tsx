import Header from 'components/Header';
import MovieCardsList from 'components/MovieCardsList';
import MovieForm from 'components/MovieForm';
import React, { useState } from 'react';
import { IMovie } from 'types';
import './Ideas.css';

export default function Ideas() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <div className="ideas">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="ideas__heading h1">My ideas</h1>
          <p className="ideas__explanation">
            You can create your own movie ideas and see them as cards below the creation form
          </p>
          <MovieForm addNewItemCb={(movie: IMovie) => setMovies([...movies, movie])} />
          {movies.length > 0 && <MovieCardsList movies={movies} />}
        </div>
      </main>
    </div>
  );
}
