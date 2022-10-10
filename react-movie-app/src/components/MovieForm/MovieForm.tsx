import React, { FormEvent } from 'react';
import { IMovie } from 'types';
import CheckboxItem from 'ui/CheckboxItem';
import Switcher from 'ui/Switcher';
import './MovieForm.css';
import FormField from '../../ui/FormField/FormField';

interface IMovieFormProps {
  addNewItemCb: (movie: IMovie) => void;
}
interface IMovieFormState {
  errors: {
    [key: string]: string[];
  };
  isDisabled: boolean;
}
export default class MovieForm extends React.Component<IMovieFormProps, IMovieFormState> {
  nameRef: React.RefObject<HTMLInputElement>;
  overviewRef: React.RefObject<HTMLTextAreaElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  languageRef: React.RefObject<HTMLSelectElement>;
  genresRef: React.RefObject<HTMLFieldSetElement>;
  durationRef: React.RefObject<HTMLInputElement>;
  imageRef: React.RefObject<HTMLInputElement>;

  constructor(props: IMovieFormProps) {
    super(props);

    this.nameRef = React.createRef();
    this.overviewRef = React.createRef();
    this.dateRef = React.createRef();
    this.languageRef = React.createRef();
    this.genresRef = React.createRef();
    this.durationRef = React.createRef();
    this.imageRef = React.createRef();

    this.state = {
      errors: {
        name: [],
        overview: [],
        date: [],
        genres: [],
        image: [],
      },
      isDisabled: true,
    };
  }

  getGenres() {
    const genres: string[] = [];
    const checkboxes = this.genresRef.current?.querySelectorAll(
      'input[type="checkbox"]'
    ) as NodeListOf<HTMLInputElement>;
    for (const checkbox of checkboxes) {
      if (checkbox.checked) genres.push(checkbox.name);
    }
    return genres;
  }

  removeErrors(name: string) {
    this.setState(
      (prevState) => ({
        errors: {
          ...prevState.errors,
          [name]: [],
        },
      }),
      () => {
        this.checkForErrors();
      }
    );
  }

  getFromValidation() {
    const newErrorState: { [key: string]: string[] } = {
      name: [],
      overview: [],
      date: [],
      genres: [],
      image: [],
    };

    if (!this.nameRef.current?.value.trim()) newErrorState.name.push('Name cannot  be empty.');

    const overviewLength = this.overviewRef.current?.value.trim().length;
    if (!overviewLength || overviewLength < 50)
      newErrorState.overview.push('Overview must contain at least 50 characters.');

    const dateValue = this.dateRef.current?.value;
    if (!dateValue) {
      newErrorState.date.push('Date cannot be empty.');
    } else if (new Date(dateValue).getTime() < Date.now()) {
      newErrorState.date.push('You cannot plan release for past.');
    }

    if (this.getGenres().length < 1) newErrorState.genres.push('You must pick at least 1 genre.');

    if (!this.imageRef.current?.files?.length)
      newErrorState.image.push("You must load a backdrop image for your idea's card.");

    return newErrorState;
  }

  checkForErrors() {
    for (const key in this.state.errors) {
      if (this.state.errors[key].length > 0) {
        this.setState({
          isDisabled: true,
        });
        return false;
      }
    }
    this.setState({
      isDisabled: false,
    });
    return true;
  }

  getInfoFromForm() {
    const movie: IMovie = {
      title: this.nameRef.current?.value || 'TBD TITLE',
      overview: this.overviewRef.current?.value || 'TBD OVERVIEW',
      release_date: this.dateRef.current?.value || 'TBA',
      original_language: this.languageRef.current?.value || 'en',
      genres: this.getGenres(),
      runtime: this.durationRef.current?.checked ? '> 50' : '< 50',
      backdrop_path: URL.createObjectURL((this.imageRef.current?.files as FileList)[0]),
    };
    return movie;
  }

  handleCreation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState(
      {
        errors: this.getFromValidation(),
      },
      () => {
        if (this.checkForErrors()) {
          this.props.addNewItemCb(this.getInfoFromForm());
        }
      }
    );
  }

  render() {
    return (
      <form className="movie-form" onSubmit={(event) => this.handleCreation(event)}>
        <FormField
          inputE={
            <input
              id="name-input"
              type="text"
              className="movie-form__input"
              placeholder="Name of your movie"
              ref={this.nameRef}
              onChange={() => this.removeErrors('name')}
            />
          }
          labelText="Name:"
          errors={this.state.errors.name}
        />
        <FormField
          inputE={
            <textarea
              id="overview-input"
              className="movie-form__textarea movie-form__input"
              placeholder="Short description of your movie"
              ref={this.overviewRef}
              onChange={() => this.removeErrors('overview')}
            ></textarea>
          }
          labelText={'Overview:'}
          errors={this.state.errors.overview}
        />
        <FormField
          inputE={
            <input
              id="date"
              type="date"
              className="movie-form__input movie-form__date"
              ref={this.dateRef}
              onChange={() => this.removeErrors('date')}
            />
          }
          labelText="Planning release date"
          errors={this.state.errors.date}
        />
        <FormField
          inputE={
            <select
              id="language-input"
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
          }
          labelText={'Language:'}
        />
        <FormField
          inputE={
            <fieldset
              id="genres-input"
              className="movie-form__checkbox-group"
              ref={this.genresRef}
              onChange={() => this.removeErrors('genres')}
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
          }
          labelText="Genres:"
          errors={this.state.errors.genres}
        />
        <FormField
          inputE={
            <div className="movie-form__duration-options">
              <label>Short</label>
              <Switcher inputRef={this.durationRef} />
              <label>Full-length</label>
            </div>
          }
          labelText="Duration:"
        />
        <FormField
          inputE={
            <input
              type="file"
              multiple={false}
              accept=".png, .jpg, .jpeg"
              className="movie-form__file"
              ref={this.imageRef}
              onChange={() => this.removeErrors('image')}
            />
          }
          labelText="Backdrop image"
          errors={this.state.errors.image}
        />
        <button
          className={`movie-form__create-btn button ${
            this.state.isDisabled ? 'button_disabled' : ''
          }`}
          type="submit"
        >
          Create
        </button>
      </form>
    );
  }
}
