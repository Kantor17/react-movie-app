import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const testValue = 'FooBar';
  const getSearchBox = () => screen.getByRole('searchbox');

  test("shows user's input", () => {
    render(<SearchBar />);
    const searchBox = getSearchBox();
    fireEvent.change(searchBox, { target: { value: testValue } });
    expect(searchBox).toHaveValue(testValue);
  });

  test('gets value from localStorage during initialization', () => {
    localStorage.setItem('searchQuery', testValue);
    render(<SearchBar />);
    expect(getSearchBox()).toHaveValue(testValue);
  });

  test("sets it's value to localStorage during unmounting", () => {
    const { unmount } = render(<SearchBar />);
    fireEvent.change(getSearchBox(), { target: { value: testValue } });
    unmount();
    expect(localStorage.getItem('searchQuery')).toStrictEqual(testValue);
  });
});
