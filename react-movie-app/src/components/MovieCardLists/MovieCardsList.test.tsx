import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCardsList from './MovieCardsList';
import { mockedSearchResponse } from 'mocks/mockedData';

describe('MovieCardsList', () => {
  beforeEach(() => {
    render(<MovieCardsList movies={mockedSearchResponse.results} />);
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
