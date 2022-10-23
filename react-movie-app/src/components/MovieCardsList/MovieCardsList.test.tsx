import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCardsList from './MovieCardsList';
import { movies } from '../../data/movies';

describe('MovieCardsList', () => {
  beforeEach(() => {
    render(<MovieCardsList movies={movies} />);
  });
  test('contains MovieCards', () => {
    const movieCards = screen.getAllByTestId('movie-card');
    movieCards.every((movie) => {
      expect(movie).toBeInTheDocument();
    });
  });
  test('has same amount of movie cards as length of array with movie data', () => {
    expect(screen.getAllByTestId('movie-card').length).toStrictEqual(movies.length);
  });
});
