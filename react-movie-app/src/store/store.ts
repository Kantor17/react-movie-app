import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import ideasReducer from './slices/ideasSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    ideas: ideasReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
