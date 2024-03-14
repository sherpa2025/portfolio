import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface NavbarState {
  activeItem: string | null;
}

const initialState: NavbarState = {
  activeItem: null,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveItem: (state, action: PayloadAction<string | null>) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = navbarSlice.actions;
export const selectActiveItem = (state: RootState) => state.navbar.activeItem;

export default navbarSlice.reducer;
