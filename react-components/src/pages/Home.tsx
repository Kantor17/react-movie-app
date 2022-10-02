import React from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardsList';
import SearchBar from 'components/SearchBar';
import Header from 'components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <main className="main">
          <div className="container">
            <SearchBar />
            <MovieCardsList />
          </div>
        </main>
      </div>
    );
  }
}
