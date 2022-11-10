import React, { useContext } from 'react';
import { IMoviesAction, IMoviesState } from 'types';

interface IMoviesContext {
  moviesState: IMoviesState;
  moviesDispatch: React.Dispatch<IMoviesAction>;
}

export const MoviesContext = React.createContext<IMoviesContext>({
  moviesState: {
    movies: [],
  },
  moviesDispatch: () => {},
});

export const useMoviesContext = () => useContext(MoviesContext);
