import React from 'react';
import { render } from '@testing-library/react';
import Ideas from './Ideas';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

describe('Ideas', () => {
  test('renders Ideas component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Ideas />
        </Provider>
      </BrowserRouter>
    );
  });
});
