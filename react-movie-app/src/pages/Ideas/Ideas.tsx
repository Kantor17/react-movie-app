import Header from 'components/Header';
import MovieCardsList from 'components/MovieCardsList';
import MovieForm from 'components/MovieForm';
import React from 'react';
import { useGlobalContext } from 'store/globalContext';
import { EActionTypes, IMovie } from 'types';
import './Ideas.css';

export default function Ideas() {
  const { globalState, globalDispatch } = useGlobalContext();
  return (
    <div className="ideas">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="ideas__heading h1">My ideas</h1>
          <p className="ideas__explanation">
            You can create your own movie ideas and see them as cards below the creation form
          </p>
          <MovieForm
            addNewItemCb={(movie: IMovie) =>
              globalDispatch({ type: EActionTypes.ADD_IDEA, payload: movie })
            }
          />
          {globalState.movies.length > 0 && <MovieCardsList movies={globalState.ideas} />}
        </div>
      </main>
    </div>
  );
}
