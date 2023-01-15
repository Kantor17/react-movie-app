import Header from 'components/Header/Header';
import React from 'react';
import './PageNotFound.css';

export default function PageNotFound() {
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
