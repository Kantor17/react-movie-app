import Header from 'components/Header';
import MovieCardsList from '../../components/MovieCardLists';
import IdeaForm from '../../components/IdeaForm';
import React from 'react';
import { useGlobalContext } from 'store/globalContext';
import { EActionTypes, IIdea } from 'types';
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
          <IdeaForm
            addNewItemCb={(idea: IIdea) =>
              globalDispatch({ type: EActionTypes.ADD_IDEA, payload: idea })
            }
          />
          {globalState.ideas.length > 0 && <MovieCardsList ideas={globalState.ideas} />}
        </div>
      </main>
    </div>
  );
}
