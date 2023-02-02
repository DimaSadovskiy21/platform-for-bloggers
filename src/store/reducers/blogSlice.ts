import { blogsAPI } from './../../API/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogType } from '../../models/Blog';

type BlogStateType = {
  // page: number,
  // pageSize: number,
  // totalCount: number,
  // pagesCount: number,
  loading: boolean;
  error: string;
  blogs: BlogType[];
};

const initialState: BlogStateType = {
  loading: false,
  error: '',
  blogs: [],
};

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (_, { rejectWithValue, dispatch }) => {
      const res = await blogsAPI.getBlogs();
      dispatch(setBlogs(res.data.items));
  },
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<BlogType[]>) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = blogSlice.actions

export default blogSlice.reducer;
