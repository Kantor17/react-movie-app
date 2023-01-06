export interface IMovie {
  id: number | string;
  backdrop_path?: string;
  poster_path?: string;
  genres?: {
    id?: number;
    name: string;
  }[];
  original_language?: string;
  overview?: string;
  release_date: string;
  runtime?: number | string;
  title: string;
  vote_average?: number;
  credits?: ICredits;
}
interface ICredits {
  cast?: ICast[];
  crew?: ICrew[];
}
export interface ICast {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
  job: null;
}
export interface ICrew {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  credit_id?: string;
  department?: string;
  job?: string;
  character: null;
}

export interface IGlobalState {
  movies: IMovie[];
  ideas: IMovie[];
  detailsItem: IMovie | null;
  submittedQuery: string;
  searchPage: number;
  maxSearchPage: number;
}

export type TCardType = 'searched' | 'idea';

export enum EActionTypes {
  REPLACE_MOVIES = 'REPLACE_MOVIES',
  ADD_IDEA = 'ADD_IDEA',
  REPLACE_DETAILS_ITEM = 'REPLACE_DETAILS_ITEM',
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

export interface IReplaceDetailsItemAction {
  type: EActionTypes.REPLACE_DETAILS_ITEM;
  payload: IMovie;
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
  | IReplaceDetailsItemAction
  | IChangeSubmittedQueryAction
  | IChangeSearchPageAction
  | IChangeMaxSearchPageAction;
