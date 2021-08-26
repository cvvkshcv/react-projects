import { createSlice } from '@reduxjs/toolkit';

export const counterState = createSlice({
  name: 'counter',
  initialState: {
    name: 'UI Gems',
    counter: 0
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    }
  }
});

export const { increment, decrement } = counterState.actions;
export default counterState.reducer;