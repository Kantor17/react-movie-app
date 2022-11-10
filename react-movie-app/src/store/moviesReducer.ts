import { EMoviesActionTypes, IMoviesAction, IMoviesState } from '../types';

export function moviesReducer(state: IMoviesState, action: IMoviesAction) {
  const { type, payload } = action;
  switch (type) {
    case EMoviesActionTypes.REPLACE:
      return {
        movies: payload,
      };
    default:
      return state;
  }
}

export const defaultMoviesState: IMoviesState = {
  movies: [],
};
