import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import postSlice from './postSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSlice
  }
});
