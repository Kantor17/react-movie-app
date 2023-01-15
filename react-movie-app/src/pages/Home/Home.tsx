import React from 'react';
import './Home.css';
import MovieCardsList from 'components/MovieCardsList/MovieCardsList';
import SearchBar from 'components/SearchBar/SearchBar';
import Header from 'components/Header/Header';
import { IMovie } from 'types';

interface IHomeState {
  movies: IMovie[];
}
export default class Home extends React.Component<Record<string, unknown>, IHomeState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  render() {
    return (
      <div className="home">
        <Header />
        <main className="main">
          <div className="container">
            <SearchBar changeMoviesCb={(movies: IMovie[]) => this.setState({ movies })} />
            <MovieCardsList movies={this.state.movies} />
          </div>
        </main>
      </div>
    );
  }
}
