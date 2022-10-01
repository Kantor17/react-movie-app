import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form method="get" className="search-bar">
        <input type="text" className="search-text" placeholder="Search..." />
        <button type="submit" className="search-submit button">
          Search
        </button>
      </form>
    );
  }
}
