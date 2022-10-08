import React from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardsList/MovieCardsList';
import SearchBar from 'components/SearchBar/SearchBar';
import Header from 'components/Header/Header';
import { movies } from 'data/movies';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <main className="main">
          <div className="container">
            <SearchBar />
            <MovieCardsList movies={movies} />
          </div>
        </main>
      </div>
    );
  }
}
