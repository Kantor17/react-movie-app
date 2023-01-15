import Header from 'components/Header/Header';
import React from 'react';
import './PageNotFound.css';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className="page-not-found">
        <Header />
        <main className="main">
          <div className="container">
            <h1 className="page-not-found__heading">404</h1>
            <p className="page-not-found__message">Sorry, page not found</p>
          </div>
        </main>
      </div>
    );
  }
}
