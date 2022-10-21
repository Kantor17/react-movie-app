import getMovieDetails from 'API/queries/getMovieDetails';
import searchMovies from 'API/queries/searchMovies';
import React, { FormEvent } from 'react';
import { IMovie } from 'types';
import Loader from 'ui/Loader';
import './SearchBar.css';

interface ISearchBarProps {
  changeMoviesCb(movies: IMovie[]): void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

interface ISearchBarState {
  query: string;
  searchDisabled: boolean;
}
export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      query: localStorage.getItem('searchQuery') || '',
      searchDisabled: true,
    };
  }

  componentDidMount() {
    this.checkForDisabled();
    if (this.state.query.trim().length >= 1) {
      this.searchMovies();
    }
  }

  componentDidUpdate() {
    this.checkForDisabled();
  }

  checkForDisabled() {
    if (this.state.query.trim().length >= 1 && this.state.searchDisabled) {
      this.setState({ searchDisabled: false });
    }
    if (this.state.query.trim().length < 1 && !this.state.searchDisabled) {
      this.setState({ searchDisabled: true });
    }
  }

  async searchMovies() {
    this.props.setIsLoading(true);
    const searchResult = await searchMovies(this.state.query);
    const movies = [];
    for (const result of searchResult) {
      const movie = await getMovieDetails(result.id);
      movies.push(movie);
    }
    this.props.changeMoviesCb(movies);
    this.props.setIsLoading(false);
  }

  async handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!this.state.searchDisabled) this.searchMovies();
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
            this.props.isLoading || this.state.searchDisabled ? 'search-bar__submit_disabled' : ''
          }`}
        >
          {this.props.isLoading ? <Loader /> : 'Search'}
        </button>
      </form>
    );
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.query);
  }
}
