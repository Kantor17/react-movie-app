import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import { movies } from '../../data/movies';

const movieExample = movies[0];
describe('MovieCard', () => {
  test('has name of movie', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByText(movieExample.title)).toBeInTheDocument();
  });
  test('has release year of movie in parentheses', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByText(`(${movieExample.release_date.slice(0, 4)})`)).toBeInTheDocument();
  });
  test('has genres of movie', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByText(movieExample.genres.join(' ')));
  });
  test('has movie overview', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByText(movieExample.overview)).toBeInTheDocument();
  });
  test('has movie runtime', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByText(`${movieExample.runtime} min.`)).toBeInTheDocument();
  });
  test('has movie rating', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByText(movieExample.vote_average.toFixed(1))).toBeInTheDocument();
  });
  test('has language of movie', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByText(movieExample.original_language)).toBeInTheDocument();
  });
  test('has alt text with name of movie', () => {
    render(<MovieCard movie={movieExample} />);
    expect(screen.getByAltText(`${movieExample.title} backdrop image`)).toBeInTheDocument();
  });
});
