import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCardsList from './MovieCardsList';
import { movies } from '../../data/movies';

describe('MovieCardsList', () => {
  test('contains MovieCards', () => {
    render(<MovieCardsList movies={movies} />);
    const movieCards = screen.getAllByTestId('movie-card');
    movieCards.every((movie) => {
      expect(movie).toBeInTheDocument();
    });
  });
  test('has same amount of movie cards as length of array with movie data', () => {
    render(<MovieCardsList movies={movies} />);
    expect(screen.getAllByTestId('movie-card').length).toStrictEqual(movies.length);
  });
});
