import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import { mockedDetailsResponse } from 'mocks/mockedData';

describe('SearchBar', () => {
  const testValue = 'FooBar';
  const cbMock = jest.fn();

  test("shows user's input", () => {
    render(<SearchBar changeMoviesCb={cbMock} />);
    const searchBox = getSearchBox();
    fireEvent.change(searchBox, { target: { value: testValue } });
    expect(searchBox).toHaveValue(testValue);
  });

  test('gets value from localStorage during initialization', () => {
    render(<SearchBar changeMoviesCb={cbMock} />);
    localStorage.setItem('searchQuery', testValue);
    expect(getSearchBox()).toHaveValue(testValue);
  });

  test("sets it's value to localStorage during unmounting", () => {
    const { unmount } = render(<SearchBar changeMoviesCb={cbMock} />);
    fireEvent.change(getSearchBox(), { target: { value: testValue } });
    unmount();
    expect(localStorage.getItem('searchQuery')).toStrictEqual(testValue);
  });

  test('gets data from API after search', async () => {
    render(<SearchBar changeMoviesCb={cbMock} />);
    fireEvent.change(getSearchBox(), { target: { value: 'Dallas Buyers Club' } });
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(cbMock).toBeCalledWith([mockedDetailsResponse]));
  });
});

const getSearchBox = () => screen.getByRole('searchbox');
