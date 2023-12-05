import { configureStore } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

//reducer
import blogReducer from "./slices/blogSlice";
import titleReducer from "./slices/titleSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    title: titleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// optional but compulsory refetchOnFocus,refetchOnReconnect feature
// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
