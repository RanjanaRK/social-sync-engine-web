import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth.slice";
import postReducer from "../features/post/state/post.slice";
import profileReducer from "../features/profile/state/profile.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
