import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCardsList from './MovieCardsList';
import { mockedSearchResponse } from 'mocks/mockedData';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

describe('MovieCardsList', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieCardsList movies={mockedSearchResponse.results} />
        </Provider>
      </BrowserRouter>
    );
  });
  test('contains MovieCards', () => {
    const movieCards = screen.getAllByTestId('movie-card');
    movieCards.every((movie) => {
      expect(movie).toBeInTheDocument();
    });
  });
  test('has same amount of movie cards as length of array with movie data', () => {
    expect(screen.getAllByTestId('movie-card').length).toStrictEqual(
      mockedSearchResponse.results.length
    );
  });
});
