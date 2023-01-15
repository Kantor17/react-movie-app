import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  test('renders PageNotFound page component', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );
  });
});
