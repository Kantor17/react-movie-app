import Header from 'components/Header';
import MovieForm from 'components/MovieForm';
import React from 'react';
import './Ideas.css';

export default class Ideas extends React.Component {
  render() {
    return (
      <div className="ideas">
        <Header />
        <main className="main">
          <div className="container">
            <h1 className="ideas__heading h1">My ideas</h1>
            <p className="ideas__explanation">
              You can create your own movie ideas and see them as cards below the creation form
            </p>
            <MovieForm />
          </div>
        </main>
      </div>
    );
  }
}
