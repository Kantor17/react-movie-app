import React from 'react';
import './SearchBar.css';

interface ISearchBarState {
  query: string;
}
export default class SearchBar extends React.Component<unknown, ISearchBarState> {
  constructor() {
    super({});
    this.state = {
      query: localStorage.getItem('searchQuery') || '',
    };
  }

  render() {
    return (
      <form method="get" className="search-bar" onSubmit={(event) => event.preventDefault()}>
        <input
          value={this.state.query}
          type="text"
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
