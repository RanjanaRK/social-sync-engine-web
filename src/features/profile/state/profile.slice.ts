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
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);

      state.postsCount = Math.max(0, state.postsCount - 1);
    },
    clearProfile: (state) => {
      state.user = null;
      state.posts = [];
      state.postsCount = 0;
    },
    updateProfileImageState: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.profileImage = action.payload;
      }
    },
  },
});

export const { setProfile, removePost, clearProfile, updateProfileImageState } =
  profileSlice.actions;

export default profileSlice.reducer;
