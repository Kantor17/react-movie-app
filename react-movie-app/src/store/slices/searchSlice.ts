import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from 'types';

interface ISearchState {
  movies: IMovie[];
  selectedMovieId: string | null;
  submittedQuery: string;
  searchPage: number;
  maxSearchPage: number;
}
const initialState: ISearchState = {
  movies: [],
  selectedMovieId: null,
  submittedQuery: '',
  searchPage: 1,
  maxSearchPage: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    replaceMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload;
    },
    selectMovie: (state, action: PayloadAction<string>) => {
      state.selectedMovieId = action.payload;
    },
    changeSubmittedQuery: (state, action: PayloadAction<string>) => {
      state.submittedQuery = action.payload;
    },
    changeSearchPage: (state, action: PayloadAction<number>) => {
      state.searchPage = action.payload;
    },
    changeMaxSearchPage: (state, action: PayloadAction<number>) => {
      state.maxSearchPage = action.payload;
    },
  },
});

export const {
  replaceMovies,
  selectMovie,
  changeSubmittedQuery,
  changeSearchPage,
  changeMaxSearchPage,
} = searchSlice.actions;

export default searchSlice.reducer;
