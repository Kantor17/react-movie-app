import React from 'react';
import { IMovie } from 'types';
import CheckboxItem from 'ui/CheckboxItem';
import Switcher from 'ui/Switcher';
import './MovieForm.css';

export default class MovieForm extends React.Component {
  nameRef: React.RefObject<HTMLInputElement>;
  overviewRef: React.RefObject<HTMLTextAreaElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  languageRef: React.RefObject<HTMLSelectElement>;
  genresRef: React.RefObject<HTMLFieldSetElement>;
  durationRef: React.RefObject<HTMLInputElement>;
  imageRef: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, unknown>) {
    super(props);

    this.nameRef = React.createRef();
    this.overviewRef = React.createRef();
    this.dateRef = React.createRef();
    this.languageRef = React.createRef();
    this.genresRef = React.createRef();
    this.durationRef = React.createRef();
    this.imageRef = React.createRef();
  }

  getInfoFromForm() {
    const getGenres = () => {
      const genres: string[] = [];
      const checkboxes = this.genresRef.current?.querySelectorAll(
        'input[type="checkbox"]'
      ) as NodeListOf<HTMLInputElement>;
      for (const checkbox of checkboxes) {
        if (checkbox.checked) genres.push(checkbox.name);
      }
      return genres;
    };

    const movie: Partial<IMovie> = {
      title: this.nameRef.current?.value,
      overview: this.overviewRef.current?.value,
      release_date: this.dateRef.current?.value,
      original_language: this.languageRef.current?.value,
      genres: getGenres(),
      runtime: this.durationRef.current?.checked ? 'Short(<50 min.)' : 'Full-length(> 50 min.)',
      backdrop_path: URL.createObjectURL((this.imageRef.current?.files as FileList)[0]),
    };
    return movie;
  }
  handleCreation(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    console.log(this.getInfoFromForm());
  }
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
            ref={this.nameRef}
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
            ref={this.overviewRef}
          ></textarea>
        </div>
        <div className="movie-form__field">
          <label htmlFor="date" className="movie-form__label">
            Release date:
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="movie-form__input movie-form__date"
            ref={this.dateRef}
          />
        </div>
        <div className="movie-form__field">
          <label htmlFor="language" className="movie-form__label">
            Language:
          </label>
          <select
            id="language"
            name="language"
            className="movie-form__input"
            ref={this.languageRef}
          >
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
          <fieldset
            id="genres"
            name="genres"
            className="movie-form__checkbox-group"
            ref={this.genresRef}
          >
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
            <Switcher inputRef={this.durationRef} />
            Full-length
          </div>
        </div>
        <div className="movie-form__field">
          <label htmlFor="image" className="movie-form__label">
            Backdrop image:
          </label>
          <input
            type="file"
            multiple={false}
            accept=".png, .jpg, .jpeg"
            className="movie-form__file"
            ref={this.imageRef}
          />
        </div>
        <button
          className="movie-form__create-btn"
          type="submit"
          onClick={(event) => this.handleCreation(event)}
        >
          Create
        </button>
      </form>
    );
  }
}
