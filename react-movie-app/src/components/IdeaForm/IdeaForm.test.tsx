import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import IdeaForm from './IdeaForm';
import userEvent from '@testing-library/user-event';

describe('IdeaForm', () => {
  const cbMock = jest.fn();
  const imageMock = new File(['test'], 'test.png', { type: 'image/png' });
  beforeEach(() => {
    window.URL.createObjectURL = jest.fn();
    render(<IdeaForm addNewItemCb={cbMock} />);
  });

  test('calls creation callback with data from the form if it was filled correctly', async () => {
    window.URL.createObjectURL = () =>
      'https://image.tmdb.org/t/p/original//jFp5aAlGQ1H3gwdORL2urr8dnoN.jpg';

    userEvent.type(getTitleInput(), 'The Movie');
    userEvent.type(getOverviewInput(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.');
    userEvent.type(getDateInput(), '9999-10-10');
    userEvent.click(getGenreCheckbox());
    userEvent.upload(getImageInput(), imageMock);
    userEvent.click(getSubmitBtn());

    const expectedObject = {
      backdrop_path: 'https://image.tmdb.org/t/p/original//jFp5aAlGQ1H3gwdORL2urr8dnoN.jpg',
      genres: ['drama'],
      original_language: 'en',
      overview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      release_date: '9999-10-10',
      runtime: '< 50',
      title: 'The Movie',
    };
    await waitFor(() =>
      expect(cbMock).toHaveBeenCalledWith({ ...expectedObject, id: expect.any(String) })
    );
  });

  test('shows basic errors if fields did not pass validation', () => {
    userEvent.type(getTitleInput(), ' '); // need to do this because submit button is disabled before user starts typing
    userEvent.click(getSubmitBtn());

    const validationErrors = [
      'Title cannot be empty.',
      'Overview must contain at least 50 characters.',
      'Date cannot be empty.',
      'You must pick at least 1 genre.',
      "You must load a backdrop image for your idea's card.",
    ];
    validationErrors.forEach(async (error) => {
      await waitFor(() => expect(screen.getByText(error)).toBeInTheDocument());
    });
  });

  test('shows an error if release date is in the past', async () => {
    userEvent.type(getDateInput(), '2000-10-10');
    userEvent.click(getSubmitBtn());

    await waitFor(() =>
      expect(screen.getByText('You must plan release for a future date.')).toBeInTheDocument()
    );
  });
});

function getTitleInput() {
  return screen.getByRole('textbox', {
    name: /title:/i,
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
