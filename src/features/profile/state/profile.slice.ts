// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { User } from "../../auth/utils/authType";
// import type { Post } from "../../post/utils/types";
// interface ProfileState {
//   user: User | null;
//   posts: Post[];
//   postsCount: number;
//   isLoading: boolean;
// }

// const profileSlice = createSlice({
//   name: "profile",

//   initialState: {
//     user: null,
//     posts: [],
//     postsCount: 0,
//     isLoading: false,
//   } as ProfileState,

//   reducers: {
//     setProfile: (state, action: PayloadAction<ProfileState>) => {
//       state.user = action.payload.user;
//       state.posts = action.payload.posts;
//       state.postsCount = action.payload.postsCount;
//     },
//     removePost: (state, action: PayloadAction<string>) => {
//       state.posts = state.posts.filter((post) => post._id !== action.payload);

//       state.postsCount = Math.max(0, state.postsCount - 1);
//     },
//     setProfileLoading: (state, action: PayloadAction<boolean>) => {
//       state.isLoading = action.payload;
//     },

//     clearProfile: (state) => {
//       state.user = null;
//       state.posts = [];
//       state.postsCount = 0;
//     },
//     updateProfileImageState: (state, action: PayloadAction<string>) => {
//       if (state.user) {
//         state.user.profileImage = action.payload;
//       }
//     },
//   },
// });

// export const { setProfile, removePost, clearProfile, updateProfileImageState } =
//   profileSlice.actions;

// export default profileSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../auth/utils/authType";
import type { Post } from "../../post/utils/types";

interface ProfileState {
  user: User | null;
  posts: Post[];
  postsCount: number;
  isLoading: boolean;
}

const initialState: ProfileState = {
  user: null,
  posts: [],
  postsCount: 0,
  isLoading: false,
};

const profileSlice = createSlice({
  name: "profile",

  initialState,

  reducers: {
    setProfile: (
      state,
      action: PayloadAction<{
        user: User;
        posts: Post[];
        postsCount: number;
      }>,
    ) => {
      state.user = action.payload.user;
      state.posts = action.payload.posts;
      state.postsCount = action.payload.postsCount;
    },

    setProfileLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);

      state.postsCount = Math.max(0, state.postsCount - 1);
    },

    clearProfile: (state) => {
      state.user = null;
      state.posts = [];
      state.postsCount = 0;
      state.isLoading = false;
    },

    updateProfileImageState: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.profileImage = action.payload;
      }
    },
  },
});

export const {
  setProfile,
  setProfileLoading,
  removePost,
  clearProfile,
  updateProfileImageState,
} = profileSlice.actions;

export default profileSlice.reducer;
