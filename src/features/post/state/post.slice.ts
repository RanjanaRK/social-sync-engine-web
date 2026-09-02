import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../utils/types";

interface PostState {
  posts: Post[];
  isLoading: boolean;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },

    setPostLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },

    clearPosts: (state) => {
      state.posts = [];
      state.isLoading = false;
    },
  },
});

export const { setPosts, setPostLoading, removePost, clearPosts } =
  postSlice.actions;

export default postSlice.reducer;
