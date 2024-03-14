import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../reducers/slices/navbar";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    // Add other reducers if you have them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
