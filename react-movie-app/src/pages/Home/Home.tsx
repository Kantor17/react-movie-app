import React from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardList';
import SearchBar from 'components/SearchBar/';
import Header from 'components/Header/';
import { useGlobalContext } from 'store/globalContext';
import Pagination from 'components/Pagination';

export default function Home() {
  const { globalState } = useGlobalContext();
  return (
    <div className="home">
      <Header />
      <main className="main">
        <div className="container">
          <SearchBar />
          <MovieCardsList movies={globalState.movies} />
          {globalState.movies.length > 0 && <Pagination />}
        </div>
      </main>
    </div>
  );
}
