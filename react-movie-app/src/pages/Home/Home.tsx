import React from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardList';
import SearchBar from 'components/SearchBar/';
import Header from 'components/Header/';
import Pagination from 'components/Pagination';
import { useTypedDispatch, useTypedSelector } from 'hooks/reduxHooks';
import ModalError from 'ui/ModalError';
import { changeError } from 'store/slices/searchSlice';

export default function Home() {
  const { error, movies } = useTypedSelector((state) => state.search);
  const dispatch = useTypedDispatch();

  return (
    <div className="home">
      {error && <ModalError closeCb={() => dispatch(changeError(null))} error={error} />}
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
