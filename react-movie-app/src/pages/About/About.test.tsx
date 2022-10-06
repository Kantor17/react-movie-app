import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe('About', () => {
  test('renders About page component', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });
});
