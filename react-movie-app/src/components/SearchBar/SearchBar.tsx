import getMovieDetails from 'API/queries/getMovieDetails';
import searchMovies from 'API/queries/searchMovies';
import React, { FormEvent } from 'react';
import { IMovie } from 'types';
import './SearchBar.css';

interface ISearchBarProps {
  changeMoviesCb(movies: IMovie[]): void;
}

interface ISearchBarState {
  query: string;
}
export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      query: localStorage.getItem('searchQuery') || '',
    };
  }

  async handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchResult = await searchMovies(this.state.query);
    const movies = [];
    for (const result of searchResult) {
      const movie = await getMovieDetails(result.id);
      movies.push(movie);
    }
    this.props.changeMoviesCb(movies);
  }

  render() {
    return (
      <form method="get" className="search-bar" onSubmit={(event) => this.handleSearch(event)}>
        <input
          value={this.state.query}
          type="search"
          className="search-text"
          placeholder="Search..."
          onChange={(event) => this.setState({ query: event.target.value })}
        />
        <button type="submit" className="search-submit button">
          Search
        </button>
      </form>
    );
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.query);
  }
}
