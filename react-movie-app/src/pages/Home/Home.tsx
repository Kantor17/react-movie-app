import React, { useState } from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardsList/';
import SearchBar from 'components/SearchBar/';
import Header from 'components/Header/';
import { IMovie } from 'types';

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <div className="home">
      <Header />
      <main className="main">
        <div className="container">
          <SearchBar changeMoviesCb={(movies: IMovie[]) => setMovies(movies)} />
          <MovieCardsList movies={movies} />
        </div>
      </main>
    </div>
  );
}
