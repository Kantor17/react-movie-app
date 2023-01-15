import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IMovie } from 'types';
import CheckboxItem from 'ui/CheckboxItem';
import Switcher from 'ui/Switcher';
import FormField from '../../ui/FormField/FormField';
import Modal from 'ui/Modal/';
import './MovieForm.css';
import { formatDate } from 'utils/formatDate';

interface IMovieFormProps {
  addNewItemCb: (movie: IMovie) => void;
}

const schema = yup.object().shape({
  title: yup.string().trim().required('Title cannot be empty.'),
  overview: yup.string().min(50, 'Overview must contain at least 50 characters.'),
  date: yup
    .date()
    .nullable()
    .typeError('Date cannot be empty.')
    .min(new Date(Date.now()), 'You must plan release for a future date.'),
  genres: yup
    .array()
    .nullable()
    .min(1, 'You must choose at least 1 genre.')
    .required('You must choose at least 1 genre.'),
  image: yup
    .mixed()
    .test('file', "You must load a backdrop image for your idea's card.", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
});

export default function MovieForm({ addNewItemCb }: IMovieFormProps) {
  const [successModal, setSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitted, isDirty },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    const movie: IMovie = {
      id: uuid(),
      title: data.title,
      overview: data.overview,
      release_date: formatDate(data.date),
      original_language: data.language,
      genres: data.genres.map((genre: string) => {
        return {
          name: genre,
        };
      }),
      runtime: data.duration ? '> 50' : '< 50',
      backdrop_path: URL.createObjectURL((data.image as FileList)[0]),
    };

    addNewItemCb(movie);
    setSuccessModal(true);
    reset();
  });

  return (
    <form className="movie-form" onSubmit={onSubmit}>
      {successModal && (
        <Modal closeCb={() => setSuccessModal(false)}>
          <p className="movie-form__success-msg">
            You have successfully created your movie idea&apos;s card!
          </p>
        </Modal>
      )}
      <FormField
        inputE={
          <input
            {...register('title')}
            id="title-input"
            type="text"
            className="movie-form__input"
            placeholder="Title of your movie"
          />
        }
        labelText="Title:"
        error={errors.title}
      />
      <FormField
        inputE={
          <textarea
            {...register('overview', {
              required: 'Overview cannot be empty',
              minLength: { value: 50, message: 'Overview must contain at least 50 characters.' },
            })}
            id="overview-input"
            className="movie-form__textarea movie-form__input"
            placeholder="Short description of your movie"
          ></textarea>
        }
        labelText={'Overview:'}
        error={errors.overview}
      />
      <FormField
        inputE={
          <input
            {...register('date')}
            id="date"
            type="date"
            className="movie-form__input movie-form__date"
          />
        }
        labelText="Planning release date"
        error={errors.date}
      />
      <FormField
        inputE={
          <select
            {...register('language')}
            id="language-input"
            name="language"
            className="movie-form__input"
          >
            <option value="en">English</option>
            <option value="ua">Ukrainian</option>
            <option value="fr">French</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
          </select>
        }
        labelText={'Language:'}
      />
      <FormField
        inputE={
          <fieldset id="genres-input" className="movie-form__checkbox-group">
            <CheckboxItem register={register('genres')} name="drama" />
            <CheckboxItem register={register('genres')} name="mystery" />
            <CheckboxItem register={register('genres')} name="history" />
            <CheckboxItem register={register('genres')} name="thriller" />
            <CheckboxItem register={register('genres')} name="action" />
            <CheckboxItem register={register('genres')} name="war" />
            <CheckboxItem register={register('genres')} name="sci-fi" />
            <CheckboxItem register={register('genres')} name="horror" />
          </fieldset>
        }
        labelText="Genres:"
        error={errors.genres}
      />
      <FormField
        inputE={
          <div className="movie-form__duration-options">
            <label>Short</label>
            <Switcher register={register('duration')} />
            <label>Full-length</label>
          </div>
        }
        labelText="Duration:"
      />
      <FormField
        inputE={
          <input
            {...register('image')}
            id="image-input"
            type="file"
            multiple={false}
            accept=".png, .jpg, .jpeg"
            className="movie-form__file"
          />
        }
        labelText="Backdrop image"
        error={errors.image}
      />
      <button
        className={`movie-form__create-btn button ${
          (!isValid && isSubmitted) || !isDirty ? 'button_disabled' : ''
        }`}
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
