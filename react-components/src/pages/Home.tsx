import MovieCardsList from 'components/MovieCardsList';
import SearchBar from 'components/SearchBar';
import React from 'react';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
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
