import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apis from '../services/postsApi';

export const fetchPost = createAsyncThunk('posts/fetchPost', async (dispatch, getState) => {
  console.log(getState);
  return apis.fetchPosts().then(res => res.json());
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: true,
    posts: []
  },
  reducers: {
  },

  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.loading = true;
    },
    [fetchPost.fulfilled]: (state, actions) => {
      state.loading = false;
      console.log(actions)
      state.posts = actions.payload;
    },
    [fetchPost.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export default postsSlice.reducer;