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

export interface IGlobalState {
  movies: IMovie[];
  ideas: IMovie[];
}

export enum EActionTypes {
  REPLACE_MOVIES = 'REPLACE_MOVIES',
  ADD_IDEA = 'ADD_IDEA',
}

export interface IAddIdeaAction {
  type: EActionTypes.ADD_IDEA;
  payload: IMovie;
}

export interface IReplaceMoviesAction {
  type: EActionTypes.REPLACE_MOVIES;
  payload: IMovie[];
}

export type Action = IAddIdeaAction | IReplaceMoviesAction;
