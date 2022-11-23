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
  submittedQuery: string;
  searchPage: number;
  maxSearchPage: number;
}

export enum EActionTypes {
  REPLACE_MOVIES = 'REPLACE_MOVIES',
  ADD_IDEA = 'ADD_IDEA',
  CHANGE_SUBMITTED_QUERY = 'CHANGE_SUBMITTED_QUERY',
  CHANGE_SEARCH_PAGE = 'CHANGE_SEARCH_PAGE',
  CHANGE_MAX_SEARCH_PAGE = 'CHANGE_MAX_SEARCH_PAGE',
}

export interface IAddIdeaAction {
  type: EActionTypes.ADD_IDEA;
  payload: IMovie;
}

export interface IReplaceMoviesAction {
  type: EActionTypes.REPLACE_MOVIES;
  payload: IMovie[];
}

export interface IChangeSubmittedQueryAction {
  type: EActionTypes.CHANGE_SUBMITTED_QUERY;
  payload: string;
}

export interface IChangeSearchPageAction {
  type: EActionTypes.CHANGE_SEARCH_PAGE;
  payload: number;
}

export interface IChangeMaxSearchPageAction {
  type: EActionTypes.CHANGE_MAX_SEARCH_PAGE;
  payload: number;
}

export type Action =
  | IAddIdeaAction
  | IReplaceMoviesAction
  | IChangeSubmittedQueryAction
  | IChangeSearchPageAction
  | IChangeMaxSearchPageAction;
