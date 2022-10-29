import getMovieDetails from 'API/queries/getMovieDetails';
import searchMovies from 'API/queries/searchMovies';
import { useMountEffect } from 'hooks/useMountEffect';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { IMovie } from 'types';
import Loader from 'ui/Loader';
import ModalError from 'ui/ModalError';
import './SearchBar.css';

interface ISearchBarProps {
  changeMoviesCb(movies: IMovie[]): void;
}

export default function SearchBar({ changeMoviesCb }: ISearchBarProps) {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [searchDisabled, setSearchDisabled] = useState(query.trim().length < 1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const handleSearch = useCallback(
    async (event?: FormEvent<HTMLFormElement>) => {
      if (event) event.preventDefault();
      if (searchDisabled) return;

      setIsLoading(true);
      try {
        const searchResult = await searchMovies(query);
        if (searchResult.length < 1) throw new Error('No movies found. Try another query.');
        const movies = [];
        for (const result of searchResult) {
          const movie = await getMovieDetails(result.id);
          movies.push(movie);
        }
        changeMoviesCb(movies);
      } catch (err) {
        setError(err as Error);
      }
      setIsLoading(false);
    },
    [changeMoviesCb, query, searchDisabled]
  );

  useMountEffect(() => {
    if (!searchDisabled) {
      handleSearch();
    }
  });

  useEffect(() => {
    if (query.trim().length >= 1) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [query]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchQuery', query);
    };
  });

  return (
    <>
      {error && <ModalError closeCb={() => setError(undefined)} error={error} />}
      <form method="get" className="search-bar" onSubmit={(event) => handleSearch(event)}>
        <input
          value={query}
          type="search"
          className="search-bar__text"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="submit"
          className={`search-bar__submit button ${
            isLoading || searchDisabled ? 'search-bar__submit_disabled' : ''
          }`}
        >
          {isLoading ? <Loader /> : 'Search'}
        </button>
      </form>
    </>
  );
}
