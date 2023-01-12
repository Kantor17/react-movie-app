import React from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardList';
import SearchBar from 'components/SearchBar/';
import Header from 'components/Header/';
import Pagination from 'components/Pagination';
import { useTypedSelector } from 'hooks/reduxHooks';

export default function Home() {
  const movies = useTypedSelector((state) => state.search.movies);
  return (
    <div className="home">
      <Header />
      <main className="main">
        <div className="container">
          <SearchBar />
          <MovieCardsList movies={movies} />
          {movies.length > 0 && <Pagination />}
        </div>
      </main>
    </div>
  );
}
