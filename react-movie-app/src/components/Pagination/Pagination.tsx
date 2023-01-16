import { useTypedDispatch, useTypedSelector } from 'hooks/reduxHooks';
import React, { useCallback } from 'react';
import { searchMovies } from 'store/slices/searchSlice';

import './Pagination.css';

export default function Pagination() {
  const { status, submittedQuery, searchPage, maxSearchPage } = useTypedSelector(
    (state) => state.search
  );
  const dispatch = useTypedDispatch();

  const changePage = useCallback(
    (page: number) => {
      dispatch(searchMovies({ keyword: submittedQuery, page }));
    },
    [dispatch, submittedQuery]
  );

  return (
    <div className="pagination">
      <button
        className={`pagination__prev pagination__control ${
          status === 'pending' || searchPage <= 1 ? 'pagination__control_disabled' : ''
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
          status === 'pending' || searchPage >= maxSearchPage ? 'pagination__control_disabled' : ''
        }`}
        onClick={() => changePage(searchPage + 1)}
      />
    </div>
  );
}
