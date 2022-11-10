export interface IMovie {
  id: number | string;
  backdrop_path?: string;
  genres: {
    id?: number;
    name: string;
  }[];
  original_language?: string;
  overview?: string;
  release_date: string;
  runtime?: number | string;
  title: string;
  vote_average?: number;
}

export interface IMoviesState {
  movies: IMovie[];
}

export enum EMoviesActionTypes {
  REPLACE = 'REPLACE',
}

export interface IMoviesAction {
  type: EMoviesActionTypes;
  payload: IMovie[];
}
