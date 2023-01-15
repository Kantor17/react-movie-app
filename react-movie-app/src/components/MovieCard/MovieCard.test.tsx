import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import { movies } from '../../data/movies';

const movieExample = movies[0];
describe('MovieCard', () => {
  beforeEach(() => {
    render(<MovieCard movie={movieExample} />);
  });
  test('has name of movie', () => {
    expect(screen.getByText(movieExample.title)).toBeInTheDocument();
  });
  test('has release year of movie in parentheses', () => {
    expect(screen.getByText(`(${movieExample.release_date.slice(0, 4)})`)).toBeInTheDocument();
  });
  test('has alt text with name of movie', () => {
    expect(screen.getByAltText(`${movieExample.title} backdrop image`)).toBeInTheDocument();
  });
});
