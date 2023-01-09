import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import { mockedDetailsResponse, mockedSearchResponse } from 'mocks/mockedData';
import { defaultGlobalState, GlobalContext } from 'store/globalContext';
import { EActionTypes } from 'types';

describe('SearchBar', () => {
  const testValue = 'FooBar';
  const cbMock = jest.fn();

  test("shows user's input", () => {
    render(<SearchBar />);
    const searchBox = getSearchBox();
    fireEvent.change(searchBox, { target: { value: testValue } });
    expect(searchBox).toHaveValue(testValue);
  });

  test('gets value from localStorage during initialization', () => {
    render(<SearchBar />);
    localStorage.setItem('searchQuery', testValue);
    expect(getSearchBox()).toHaveValue(testValue);
  });

  test("sets it's value to localStorage during unmounting", () => {
    const { unmount } = render(<SearchBar />);
    fireEvent.change(getSearchBox(), { target: { value: testValue } });
    unmount();
    expect(localStorage.getItem('searchQuery')).toStrictEqual(testValue);
  });

  test('calls dispatch function with data from API after search', async () => {
    render(
      <GlobalContext.Provider value={{ globalState: defaultGlobalState, globalDispatch: cbMock }}>
        <SearchBar />
      </GlobalContext.Provider>
    );
    fireEvent.change(getSearchBox(), { target: { value: 'Dallas Buyers Club' } });
    userEvent.click(screen.getByRole('button'));
    await waitFor(() =>
      expect(cbMock).toBeCalledWith({
        type: EActionTypes.REPLACE_MOVIES,
        payload: mockedSearchResponse.results,
      })
    );
  });
});

const getSearchBox = () => screen.getByRole('searchbox');
