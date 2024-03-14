import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardData } from "../../../types";

const initialState: CardData[] = [];

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<CardData[]>) {
      return action.payload;
    },
  },
});

export const { setCards } = cardSlice.actions;
export default cardSlice.reducer;
