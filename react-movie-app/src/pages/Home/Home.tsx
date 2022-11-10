import React from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardsList/';
import SearchBar from 'components/SearchBar/';
import Header from 'components/Header/';
import { useMoviesContext } from 'store/moviesContext';

export default function Home() {
  const { moviesState } = useMoviesContext();
  return (
    <div className="home">
      <Header />
      <main className="main">
        <div className="container">
          <SearchBar />
          <MovieCardsList movies={moviesState.movies} />
        </div>
      </main>
    </div>
  );
}
