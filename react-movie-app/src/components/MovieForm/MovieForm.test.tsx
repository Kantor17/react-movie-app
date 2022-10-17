import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieForm from './MovieForm';
import userEvent from '@testing-library/user-event';

describe('MovieForm', () => {
  const cbMock = jest.fn();
  const imageMock = new File(['test'], 'test.png', { type: 'image/png' });
  beforeEach(() => {
    window.URL.createObjectURL = jest.fn();
    render(<MovieForm addNewItemCb={cbMock} />);
  });

  test('calls creation callback with data from the form if it was filled correctly', () => {
    window.URL.createObjectURL = () =>
      'https://image.tmdb.org/t/p/original//jFp5aAlGQ1H3gwdORL2urr8dnoN.jpg';

    userEvent.type(getNameInput(), 'The Movie');
    userEvent.type(getOverviewInput(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.');
    userEvent.type(getDateInput(), '9999-10-10');
    userEvent.click(getGenreCheckbox());
    userEvent.upload(getImageInput(), imageMock);
    userEvent.click(getSubmitBtn());

    expect(cbMock).toHaveBeenCalledWith(
      expect.objectContaining({
        backdrop_path: 'https://image.tmdb.org/t/p/original//jFp5aAlGQ1H3gwdORL2urr8dnoN.jpg',
        genres: [{ name: 'drama' }],
        original_language: 'en',
        overview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        release_date: '9999-10-10',
        runtime: '< 50',
        title: 'The Movie',
      })
    );
  });

  test('shows basic errors if fields did not pass validation', () => {
    userEvent.type(getNameInput(), ' '); // need to do this because submit button is disabled before user starts typing
    userEvent.click(getSubmitBtn());
    const validationErrors = [
      'Name cannot be empty.',
      'Overview must contain at least 50 characters.',
      'Date cannot be empty.',
      'You must pick at least 1 genre.',
      "You must load a backdrop image for your idea's card.",
    ];
    validationErrors.forEach((error) => {
      expect(screen.getByText(error)).toBeInTheDocument();
    });
  });

  test('shows an error if release date is in the past', () => {
    userEvent.type(getDateInput(), '2000-10-10');
    userEvent.click(getSubmitBtn());
    expect(screen.getByText('You cannot plan release for past.')).toBeInTheDocument();
  });
});

function getNameInput() {
  return screen.getByRole('textbox', {
    name: /name:/i,
  });
}
function getOverviewInput() {
  return screen.getByRole('textbox', {
    name: /overview:/i,
  });
}
function getDateInput() {
  return screen.getByLabelText(/planning release date/i);
}
function getGenreCheckbox() {
  return screen.getByRole('checkbox', {
    name: /drama/i,
  });
}
function getImageInput() {
  return screen.getByLabelText(/backdrop image/i);
}
function getSubmitBtn() {
  return screen.getByRole('button', {
    name: /create/i,
  });
}
