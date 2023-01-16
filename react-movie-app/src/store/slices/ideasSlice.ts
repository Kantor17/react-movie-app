import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIdea } from 'types';

interface IIdeasState {
  items: IIdea[];
}
const initialState: IIdeasState = {
  items: [],
};

export const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    addIdea: (state, action: PayloadAction<IIdea>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addIdea } = ideasSlice.actions;

export default ideasSlice.reducer;
