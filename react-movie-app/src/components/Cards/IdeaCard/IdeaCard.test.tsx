import React from 'react';
import { render, screen } from '@testing-library/react';
import IdeaCard from './IdeaCard';
import { mockedIdea } from 'mocks/mockedData';
import { BrowserRouter } from 'react-router-dom';

describe('IdeaCard', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <IdeaCard idea={mockedIdea} />
      </BrowserRouter>
    );
  });
  test('has name of movie', () => {
    expect(screen.getByText(mockedIdea.title)).toBeInTheDocument();
  });
  test('has release year of movie in parentheses', () => {
    expect(screen.getByText(`(${mockedIdea.release_date.slice(0, 4)})`)).toBeInTheDocument();
  });
  test('has alt text with name of movie', () => {
    expect(screen.getByAltText(`${mockedIdea.title} backdrop image`)).toBeInTheDocument();
  });
});
