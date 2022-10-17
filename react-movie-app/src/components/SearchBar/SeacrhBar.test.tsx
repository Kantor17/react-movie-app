import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const testValue = 'FooBar';
  const getSearchBox = () => screen.getByRole('searchbox');
  const cbMock = jest.fn();

  test("shows user's input", () => {
    render(<SearchBar changeMoviesCb={cbMock} isLoading={false} setIsLoading={cbMock} />);
    const searchBox = getSearchBox();
    fireEvent.change(searchBox, { target: { value: testValue } });
    expect(searchBox).toHaveValue(testValue);
  });

  test('gets value from localStorage during initialization', () => {
    render(<SearchBar changeMoviesCb={cbMock} isLoading={false} setIsLoading={cbMock} />);
    localStorage.setItem('searchQuery', testValue);
    expect(getSearchBox()).toHaveValue(testValue);
  });

  test("sets it's value to localStorage during unmounting", () => {
    const { unmount } = render(
      <SearchBar changeMoviesCb={cbMock} isLoading={false} setIsLoading={cbMock} />
    );
    fireEvent.change(getSearchBox(), { target: { value: testValue } });
    unmount();
    expect(localStorage.getItem('searchQuery')).toStrictEqual(testValue);
  });
});
