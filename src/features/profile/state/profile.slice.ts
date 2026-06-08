import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../auth/utils/authType";
import type { Post } from "../../post/utils/types";
interface ProfileState {
  user: User | null;
  posts: Post[];
  postsCount: number;
}

const profileSlice = createSlice({
  name: "profile",

  initialState: {
    user: null,
    posts: [],
    postsCount: 0,
  } as ProfileState,

  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      state.user = action.payload.user;
      state.posts = action.payload.posts;
      state.postsCount = action.payload.postsCount;
    },

    clearProfile: (state) => {
      state.user = null;
      state.posts = [];
      state.postsCount = 0;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
