import Header from 'components/Header';
import React from 'react';
import './Ideas.css';

export default class Ideas extends React.Component {
  render() {
    return (
      <div className="ideas">
        <Header />
        <main className="main">
          <div className="container">
            <h1 className="h1">My ideas</h1>
          </div>
        </main>
      </div>
    );
  }
}
