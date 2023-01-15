import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import getMovies from 'API/queries/getMovies';
import { IMovie } from 'types';

type TStatus = 'pending' | 'fulfilled' | 'rejected';
interface ISearchState {
  status: TStatus;
  error: SerializedError | null;
  movies: IMovie[];
  selectedMovieId: string | null;
  submittedQuery: string;
  searchPage: number;
  maxSearchPage: number;
}

const initialState: ISearchState = {
  status: 'fulfilled',
  error: null,
  movies: [],
  selectedMovieId: null,
  submittedQuery: '',
  searchPage: 1,
  maxSearchPage: 1,
};

export const searchMovies = createAsyncThunk(
  'search/searchMovies',
  async ({ keyword, page }: { keyword: string; page: number }) => {
    const movies = await getMovies(keyword, page);
    return movies;
  }
);
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
    changeStatus: (state, action: PayloadAction<TStatus>) => {
      state.status = action.payload;
    },
    changeError: (state, action: PayloadAction<SerializedError | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.movies = action.payload.results;
      state.searchPage = action.payload.page;
      state.maxSearchPage = action.payload.total_pages;
      state.submittedQuery = action.meta.arg.keyword;
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  },
});

export const {
  replaceMovies,
  selectMovie,
  changeSubmittedQuery,
  changeSearchPage,
  changeMaxSearchPage,
  changeStatus,
  changeError,
} = searchSlice.actions;

export default searchSlice.reducer;
