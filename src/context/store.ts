import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import countriesReducer from "./countriesSlice";
import newsReducer from "./newsSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    countries: countriesReducer,
    news: newsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
