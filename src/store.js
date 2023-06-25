import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./features/auth";
import { api } from "./features/apiSlice";

const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auth.middleware).concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
