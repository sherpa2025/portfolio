import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../reducers/slices/navbar";
import cardReducer from "../reducers/slices/cardSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    cards: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
