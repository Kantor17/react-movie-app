import searchMovies from 'API/queries/searchMovies';
import { useTypedDispatch, useTypedSelector } from 'hooks/reduxHooks';
import React, { useCallback, useContext, useState } from 'react';
import { changeSearchPage, replaceMovies } from 'store/slices/searchSlice';
import ModalError from 'ui/ModalError';

import './Pagination.css';

export default function Pagination() {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const { submittedQuery, searchPage, maxSearchPage } = useTypedSelector((state) => state.search);
  const dispatch = useTypedDispatch();

  const changePage = useCallback(
    async (page: number) => {
      setIsLoading(true);
      try {
        const searchResponse = await searchMovies(submittedQuery, page);
        const searchResult = searchResponse.results;

        if (searchResult.length < 1) throw new Error('No movies in this page.');
        dispatch(replaceMovies(searchResult));
        dispatch(changeSearchPage(page));
      } catch (err) {
        setError(err as Error);
      }
      setIsLoading(false);
    },
    [dispatch, submittedQuery]
  );

  return (
    <div className="pagination">
      {error && <ModalError error={error} closeCb={() => setError(undefined)} />}
      <button
        className={`pagination__prev pagination__control ${
          isLoading || searchPage <= 1 ? 'pagination__control_disabled' : ''
        }`}
        onClick={() => changePage(searchPage - 1)}
      />
      <div className="pagination__counter">
        <span className="pagination__current-page">{searchPage} </span>
        {' / '}
        <span className="pagination__max-page">{maxSearchPage}</span>
      </div>
      <button
        className={`pagination__next pagination__control ${
          isLoading || searchPage >= maxSearchPage ? 'pagination__control_disabled' : ''
        }`}
        onClick={() => changePage(searchPage + 1)}
      />
    </div>
  );
}
