import React from 'react';
import { render } from '@testing-library/react';
import Ideas from './Ideas';
import { BrowserRouter } from 'react-router-dom';

describe('Ideas', () => {
  test('renders Ideas component', () => {
    render(
      <BrowserRouter>
        <Ideas />
      </BrowserRouter>
    );
  });
});
