import searchMovies from 'API/queries/searchMovies';
import { useTypedDispatch, useTypedSelector } from 'hooks/reduxHooks';
import { useMountEffect } from 'hooks/useMountEffect';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import {
  changeMaxSearchPage,
  changeSearchPage,
  changeSubmittedQuery,
  replaceMovies,
} from 'store/slices/searchSlice';
import Loader from 'ui/Loader';
import ModalError from 'ui/ModalError';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [searchDisabled, setSearchDisabled] = useState(query.trim().length < 1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const dispatch = useTypedDispatch();
  const movies = useTypedSelector((state) => state.search.movies);

  const handleSubmit = useCallback(
    async (event?: FormEvent<HTMLFormElement>) => {
      if (event) event.preventDefault();
      if (searchDisabled) return;

      dispatch(changeSubmittedQuery(query));

      setIsLoading(true);
      try {
        const searchResponse = await searchMovies(query, 1);
        const searchResult = searchResponse.results;

        if (searchResult.length < 1) throw new Error('No movies found. Try another query.');
        dispatch(replaceMovies(searchResult));
        dispatch(changeSearchPage(1));
        dispatch(changeMaxSearchPage(searchResponse.total_pages));
      } catch (err) {
        setError(err as Error);
      }
      setIsLoading(false);
    },
    [searchDisabled, dispatch, query]
  );

  useMountEffect(() => {
    if (!searchDisabled && movies.length < 1) {
      handleSubmit();
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
      <form method="get" className="search-bar" onSubmit={(event) => handleSubmit(event)}>
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
