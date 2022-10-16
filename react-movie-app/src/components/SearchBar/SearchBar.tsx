import getMovieDetails from 'API/queries/getMovieDetails';
import searchMovies from 'API/queries/searchMovies';
import React, { FormEvent } from 'react';
import { IMovie } from 'types';
import Loader from 'ui/Loader';
import './SearchBar.css';

interface ISearchBarProps {
  changeMoviesCb(movies: IMovie[]): void;
}

interface ISearchBarState {
  query: string;
  isLoading: boolean;
}
export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      query: localStorage.getItem('searchQuery') || '',
      isLoading: false,
    };
  }

  componentDidMount() {
    if (this.state.query) {
      this.searchMovies();
    }
  }

  async searchMovies() {
    this.setState({
      isLoading: true,
    });
    const searchResult = await searchMovies(this.state.query);
    const movies = [];
    for (const result of searchResult) {
      const movie = await getMovieDetails(result.id);
      movies.push(movie);
    }
    this.props.changeMoviesCb(movies);
    this.setState({
      isLoading: false,
    });
  }

  async handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.searchMovies();
  }

  render() {
    return (
      <form method="get" className="search-bar" onSubmit={(event) => this.handleSearch(event)}>
        <input
          value={this.state.query}
          type="search"
          className="search-bar__text"
          placeholder="Search..."
          onChange={(event) => this.setState({ query: event.target.value })}
        />
        <button
          type="submit"
          className={`search-bar__submit button ${
            this.state.isLoading ? 'search-bar__submit_disabled' : ''
          }`}
        >
          {this.state.isLoading ? <Loader /> : 'Search'}
        </button>
      </form>
    );
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.query);
  }
}
