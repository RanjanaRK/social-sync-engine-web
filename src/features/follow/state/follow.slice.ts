import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FollowState {
  isFollowing: boolean;
  followers: number;
  following: number;
  isLoading: boolean;
}

const initialState: FollowState = {
  isFollowing: false,
  followers: 0,
  following: 0,
  isLoading: false,
};

const followSlice = createSlice({
  name: "follow",

  initialState,

  reducers: {
    setFollowStatus: (state, action: PayloadAction<boolean>) => {
      state.isFollowing = action.payload;
    },

    setFollowCounts: (
      state,
      action: PayloadAction<{
        followers: number;
        following: number;
      }>,
    ) => {
      state.followers = action.payload.followers;
      state.following = action.payload.following;
    },

    setFollowLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setFollowers: (state, action: PayloadAction<number>) => {
      state.followers = action.payload;
    },

    clearFollowState: (state) => {
      state.isFollowing = false;
      state.followers = 0;
      state.following = 0;
      state.isLoading = false;
    },
  },
});

export const {
  setFollowStatus,
  setFollowCounts,
  setFollowLoading,
  setFollowers,
  clearFollowState,
} = followSlice.actions;

export default followSlice.reducer;
