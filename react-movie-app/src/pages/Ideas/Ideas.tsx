import Header from 'components/Header';
import MovieCardsList from 'components/MovieCardsList';
import MovieForm from 'components/MovieForm';
import React from 'react';
import { IMovie } from 'types';
import './Ideas.css';

interface IIdeasState {
  movies: IMovie[];
}
export default class Ideas extends React.Component<Record<string, never>, IIdeasState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  addNewMovie = (movie: IMovie) => {
    this.setState({
      movies: [...this.state.movies, movie],
    });
  };

  render() {
    return (
      <div className="ideas">
        <Header />
        <main className="main">
          <div className="container">
            <h1 className="ideas__heading h1">My ideas</h1>
            <p className="ideas__explanation">
              You can create your own movie ideas and see them as cards below the creation form
            </p>
            <MovieForm addNewItemCb={this.addNewMovie} />
            {this.state.movies.length > 0 && (
              <MovieCardsList movies={this.state.movies} isLoading={false} />
            )}
          </div>
        </main>
      </div>
    );
  }
}
