import React from 'react';
import { render, screen } from '@testing-library/react';
import IdeaDetails from './IdeaDetails';
import { mockedIdea } from 'mocks/mockedData';

describe('IdeaDetails', () => {
  beforeEach(() => {
    render(<IdeaDetails idea={mockedIdea} />);
  });
  test('has genres of movie', () => {
    expect(screen.getByText(mockedIdea.genres.join(', ')));
  });
  test('has movie overview', () => {
    expect(screen.getByText(mockedIdea.overview)).toBeInTheDocument();
  });
  test('has movie runtime', () => {
    expect(screen.getByText(`${mockedIdea.runtime} min.`)).toBeInTheDocument();
  });
  test('has language of movie', () => {
    expect(screen.getByText(mockedIdea.original_language)).toBeInTheDocument();
  });
});
