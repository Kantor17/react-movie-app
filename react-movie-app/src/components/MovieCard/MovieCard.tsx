import MovieInfo from 'components/MovieInfo';
import React from 'react';
import { IMovie } from 'types';
import Modal from 'ui/Modal';
import './MovieCard.css';

interface IMovieCardProps {
  movie: IMovie;
}
interface IMovieCardState {
  isModal: boolean;
}

export default class MovieCard extends React.Component<IMovieCardProps, IMovieCardState> {
  constructor(props: IMovieCardProps) {
    super(props);
    this.state = {
      isModal: false,
    };
  }
  render() {
    return (
      <>
        <div
          className="movie-card"
          onClick={() => this.setState({ isModal: true })}
          data-testid="movie-card"
        >
          <div className="movie-card__poster">
            <img
              src={this.props.movie.backdrop_path}
              alt={`${this.props.movie.title} backdrop image`}
              className="bg-img"
            />
          </div>
          <h3 className="movie-card__title">
            <span className="movie-card__name">{this.props.movie.title} </span>
            <span className="movie-card__release-date">
              ({this.props.movie.release_date.slice(0, 4)})
            </span>
          </h3>
          <div className="movie-card__more-container">
            <p className="movie-card__more-text">Click to see more</p>
          </div>
        </div>
        {this.state.isModal && (
          <Modal closeCb={() => this.setState({ isModal: false })}>
            <MovieInfo movie={this.props.movie} />
          </Modal>
        )}
      </>
    );
  }
}
