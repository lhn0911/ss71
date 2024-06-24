import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const backReduce = createSlice({
  name: 'back',
  initialState,
  reducers: {
    toggleBackground: (state) => !state,
  },
});

export const { toggleBackground } = backReduce.actions;
export default backReduce.reducer;
