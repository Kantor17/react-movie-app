import React from 'react';
import { render, screen } from '@testing-library/react';
import { movies } from '../../data/movies';
import MovieInfo from './MovieInfo';

describe('MovieInfo', () => {
  const movieExample = movies[0];
  beforeEach(() => {
    render(<MovieInfo movie={movieExample} />);
  });
  test('has genres of movie', () => {
    expect(screen.getByText(movieExample.genres.map((genreObj) => genreObj.name).join(', ')));
  });
  test('has movie overview', () => {
    expect(screen.getByText(movieExample.overview)).toBeInTheDocument();
  });
  test('has movie runtime', () => {
    expect(screen.getByText(`${movieExample.runtime} min.`)).toBeInTheDocument();
  });
  test('has movie rating', () => {
    expect(screen.getByText(movieExample.vote_average.toFixed(1))).toBeInTheDocument();
  });
  test('has language of movie', () => {
    expect(screen.getByText(movieExample.original_language)).toBeInTheDocument();
  });
});
