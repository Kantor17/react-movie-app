import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import { mockedSearchResponse } from 'mocks/mockedData';
import * as redux from 'react-redux';
import store from 'store';
import { Provider } from 'react-redux';
import { replaceMovies } from 'store/slices/searchSlice';
import { useTypedSelector } from 'hooks/reduxHooks';

describe('SearchBar', () => {
  const testValue = 'FooBar';
  const cbMock = jest.fn();

  test("shows user's input", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBox = getSearchBox();
    fireEvent.change(searchBox, { target: { value: testValue } });
    expect(searchBox).toHaveValue(testValue);
  });

  test('gets value from localStorage during initialization', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    localStorage.setItem('searchQuery', testValue);
    expect(getSearchBox()).toHaveValue(testValue);
  });

  test("sets it's value to localStorage during unmounting", () => {
    const { unmount } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    fireEvent.change(getSearchBox(), { target: { value: testValue } });
    unmount();
    expect(localStorage.getItem('searchQuery')).toStrictEqual(testValue);
  });

  test('puts data from API into global state after search', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    fireEvent.change(getSearchBox(), { target: { value: 'Dallas Buyers Club' } });
    userEvent.click(screen.getByRole('button'));
    await waitFor(() =>
      expect(store.getState().search.movies).toEqual(mockedSearchResponse.results)
    );
  });
});

const getSearchBox = () => screen.getByRole('searchbox');
