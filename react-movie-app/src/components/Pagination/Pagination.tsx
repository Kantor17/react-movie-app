import getMovieDetails from 'API/queries/getMovieDetails';
import searchMovies from 'API/queries/searchMovies';
import React, { useCallback, useContext, useState } from 'react';
import { GlobalContext } from 'store/globalContext';
import { EActionTypes, IMovie } from 'types';
import ModalError from 'ui/ModalError';

import './Pagination.css';

export default function Pagination() {
  const { globalState, globalDispatch } = useContext(GlobalContext);

  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const changePage = useCallback(
    async (page: number) => {
      setIsLoading(true);
      try {
        const searchResponse = await searchMovies(globalState.submittedQuery, page);
        const searchResult = searchResponse.results;

        if (searchResult.length < 1) throw new Error('No movies in this page.');
        const movies: IMovie[] = [];
        for (const result of searchResult) {
          const movie = await getMovieDetails(result.id);
          movies.push(movie);
        }
        globalDispatch({ type: EActionTypes.REPLACE_MOVIES, payload: movies });

        globalDispatch({
          type: EActionTypes.CHANGE_SEARCH_PAGE,
          payload: page,
        });
      } catch (err) {
        setError(err as Error);
      }
      setIsLoading(false);
    },
    [globalDispatch, globalState.submittedQuery]
  );

  return (
    <div className="pagination">
      {error && <ModalError error={error} closeCb={() => setError(undefined)} />}
      <button
        className={`pagination__prev pagination__control ${
          isLoading || globalState.searchPage <= 1 ? 'pagination__control_disabled' : ''
        }`}
        onClick={() => changePage(globalState.searchPage - 1)}
      />
      <div className="pagination__counter">
        <span className="pagination__current-page">{globalState.searchPage} </span>
        {' / '}
        <span className="pagination__max-page">{globalState.maxSearchPage}</span>
      </div>
      <button
        className={`pagination__next pagination__control ${
          isLoading || globalState.searchPage >= globalState.maxSearchPage
            ? 'pagination__control_disabled'
            : ''
        }`}
        onClick={() => changePage(globalState.searchPage + 1)}
      />
    </div>
  );
}
