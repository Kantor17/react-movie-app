import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCardsList from './MovieCardsList';
import { mockedSearchResponse } from 'mocks/mockedData';
import { BrowserRouter } from 'react-router-dom';

describe('MovieCardsList', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MovieCardsList movies={mockedSearchResponse.results} />
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
