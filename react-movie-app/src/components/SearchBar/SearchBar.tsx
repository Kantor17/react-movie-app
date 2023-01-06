import getMovieDetails from 'API/queries/getMovieDetails';
import searchMovies from 'API/queries/searchMovies';
import { useMountEffect } from 'hooks/useMountEffect';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useGlobalContext } from 'store/globalContext';
import { EActionTypes, IMovie } from 'types';
import Loader from 'ui/Loader';
import ModalError from 'ui/ModalError';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [searchDisabled, setSearchDisabled] = useState(query.trim().length < 1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const { globalState, globalDispatch } = useGlobalContext();

  const handleSubmit = useCallback(
    async (event?: FormEvent<HTMLFormElement>) => {
      if (event) event.preventDefault();
      if (searchDisabled) return;
      globalDispatch({
        type: EActionTypes.CHANGE_SUBMITTED_QUERY,
        payload: query,
      });

      setIsLoading(true);
      try {
        const searchResponse = await searchMovies(query, 1);
        const searchResult = searchResponse.results;

        if (searchResult.length < 1) throw new Error('No movies found. Try another query.');
        const movies: IMovie[] = [];
        for (const result of searchResult) {
          const movie = await getMovieDetails(result.id, ['credits']);
          movies.push(movie);
        }
        globalDispatch({ type: EActionTypes.REPLACE_MOVIES, payload: movies });
        globalDispatch({
          type: EActionTypes.CHANGE_SEARCH_PAGE,
          payload: 1,
        });
        globalDispatch({
          type: EActionTypes.CHANGE_MAX_SEARCH_PAGE,
          payload: searchResponse.total_pages,
        });
      } catch (err) {
        setError(err as Error);
      }
      setIsLoading(false);
    },
    [searchDisabled, query, globalDispatch]
  );

  useMountEffect(() => {
    if (!searchDisabled && globalState.movies.length < 1) {
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
