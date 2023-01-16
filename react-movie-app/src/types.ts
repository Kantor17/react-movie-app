export interface IMovie {
  id: string;
  title: string;
  original_title?: string;
  backdrop_path?: string;
  poster_path?: string;
  original_language: string;
  overview?: string;
  release_date: string;
  genre_ids: number[];
  popularity: number;
  vote_count: number;
  video?: boolean;
  vote_average?: number;
  adult?: boolean;
}
export interface IMovieDetails {
  id: string;
  adult: boolean;
  belongs_to_collection?: Record<string, unknown>;
  budget: number;
  homepage?: string;
  imdb_id?: string;
  backdrop_path?: string;
  poster_path?: string;
  genres: {
    id: number;
    name: string;
  }[];
  original_language: string;
  original_title: string;
  popularity: number;
  production_companies: {
    name: string;
    id: number;
    logo_path?: string;
    origin_country: string;
  }[];

  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  };
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
  tagline?: string;
  overview?: string;
  release_date: string;
  runtime?: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: ICredits;
}
interface ICredits {
  cast: ICast[];
  crew: ICrew[];
}
export interface ICast {
  adult: boolean;
  gender?: number;
  id: number;
  known_for_department: string;
  name?: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  job: null;
}
export interface ICrew {
  adult: boolean;
  gender?: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
  character: null;
}

export interface IIdea {
  id: string;
  title: string;
  overview: string;
  release_date: string;
  genres: string[];
  original_language: string;
  runtime: string;
  backdrop_path: string;
}

export interface IGlobalState {
  movies: IMovie[];
  ideas: IIdea[];
  selectedMovieId: string | null;
  submittedQuery: string;
  searchPage: number;
  maxSearchPage: number;
}

export type TCardType = 'searched' | 'idea';

export enum EActionTypes {
  REPLACE_MOVIES = 'REPLACE_MOVIES',
  ADD_IDEA = 'ADD_IDEA',
  REPLACE_SELECTED_MOVIE_ID = 'REPLACE_SELECTED_MOVIE_ID ',
  CHANGE_SUBMITTED_QUERY = 'CHANGE_SUBMITTED_QUERY',
  CHANGE_SEARCH_PAGE = 'CHANGE_SEARCH_PAGE',
  CHANGE_MAX_SEARCH_PAGE = 'CHANGE_MAX_SEARCH_PAGE',
}

export interface IAddIdeaAction {
  type: EActionTypes.ADD_IDEA;
  payload: IIdea;
}
export interface IReplaceMoviesAction {
  type: EActionTypes.REPLACE_MOVIES;
  payload: IMovie[];
}
export interface IReplaceSelectedMovieIdAction {
  type: EActionTypes.REPLACE_SELECTED_MOVIE_ID;
  payload: string;
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
  | IReplaceSelectedMovieIdAction
  | IChangeSubmittedQueryAction
  | IChangeSearchPageAction
  | IChangeMaxSearchPageAction;
