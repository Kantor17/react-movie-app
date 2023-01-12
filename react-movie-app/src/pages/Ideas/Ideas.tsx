import Header from 'components/Header';
import MovieCardsList from '../../components/MovieCardList';
import IdeaForm from '../../components/IdeaForm';
import React from 'react';
import { IIdea } from 'types';
import './Ideas.css';
import { useTypedDispatch, useTypedSelector } from 'hooks/reduxHooks';
import { addIdea } from 'store/slices/ideasSlice';

export default function Ideas() {
  const ideas = useTypedSelector((state) => state.ideas.items);
  const dispatch = useTypedDispatch();

  return (
    <div className="ideas">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="ideas__heading h1">My ideas</h1>
          <p className="ideas__explanation">
            You can create your own movie ideas and see them as cards below the creation form
          </p>
          <IdeaForm addNewItemCb={(idea: IIdea) => dispatch(addIdea(idea))} />
          {ideas.length > 0 && <MovieCardsList ideas={ideas} />}
        </div>
      </main>
    </div>
  );
}
