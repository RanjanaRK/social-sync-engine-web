import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../utils/types";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [] as Post[],
  },
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
