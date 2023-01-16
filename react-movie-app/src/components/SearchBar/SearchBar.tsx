import { useTypedDispatch, useTypedSelector } from 'hooks/reduxHooks';
import { useMountEffect } from 'hooks/useMountEffect';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { searchMovies } from 'store/slices/searchSlice';
import Loader from 'ui/Loader';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [searchDisabled, setSearchDisabled] = useState(query.trim().length < 1);

  const dispatch = useTypedDispatch();
  const { status, movies } = useTypedSelector((state) => state.search);

  const handleSubmit = useCallback(
    async (event?: FormEvent<HTMLFormElement>) => {
      if (event) event.preventDefault();
      if (searchDisabled) return;

      dispatch(searchMovies({ keyword: query, page: 1 }));
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
            status === 'pending' || searchDisabled ? 'search-bar__submit_disabled' : ''
          }`}
        >
          {status === 'pending' ? <Loader /> : 'Search'}
        </button>
      </form>
    </>
  );
}
