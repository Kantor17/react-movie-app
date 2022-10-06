import React from 'react';
import CheckboxItem from 'ui/CheckboxItem';
import Switcher from 'ui/Switcher';
import './MovieForm.css';

export default class MovieForm extends React.Component {
  render() {
    return (
      <form className="movie-form">
        <div className="movie-form__field">
          <label htmlFor="name" className="movie-form__label">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="movie-form__input"
            placeholder="Name of your movie"
          />
        </div>
        <div className="movie-form__field">
          <label htmlFor="overview" className="movie-form__label">
            Overview:
          </label>
          <textarea
            id="overview"
            className="movie-form__textarea movie-form__input"
            placeholder="Short description of your movie"
          ></textarea>
        </div>
        <div className="movie-form__field">
          <label htmlFor="date" className="movie-form__label">
            Release date:
          </label>
          <input id="date" name="date" type="date" className="movie-form__input movie-form__date" />
        </div>
        <div className="movie-form__field">
          <label htmlFor="language" className="movie-form__label">
            Language:
          </label>
          <select id="language" name="language" className="movie-form__input">
            <option value="en">English</option>
            <option value="ua">Ukrainian</option>
            <option value="fr">French</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
          </select>
        </div>
        <div className="movie-form__field">
          <label htmlFor="genres" className="movie-form__label">
            Genres:
          </label>
          <fieldset id="genres" name="genres" className="movie-form__checkbox-group">
            <CheckboxItem name="drama" />
            <CheckboxItem name="mystery" />
            <CheckboxItem name="history" />
            <CheckboxItem name="thriller" />
            <CheckboxItem name="action" />
            <CheckboxItem name="war" />
            <CheckboxItem name="sci-fi" />
            <CheckboxItem name="horror" />
          </fieldset>
        </div>
        <div className="movie-form__field">
          <label htmlFor="switchbox" className="movie-form__label">
            Duration:
          </label>
          <div className="movie-form__duration-options">
            Short
            <Switcher />
            Full-length
          </div>
        </div>
        <div className="movie-form__field">
          <label htmlFor="image" className="movie-form__label">
            Backdrop image:
          </label>
          <input type="file" className="movie-form__file" />
        </div>
        <button className="movie-form__create-btn" type="submit">
          Create
        </button>
      </form>
    );
  }
}
