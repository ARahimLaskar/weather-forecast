import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import reduxSlice from "./reduxSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    settings: reduxSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
