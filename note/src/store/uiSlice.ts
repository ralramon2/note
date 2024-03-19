import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { state: string; category: string; noteId: string } = {
  state: "read",
  category: "Notes",
  noteId: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    changeState: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    selectNote: (state, action: PayloadAction<string>) => {
      state.noteId = action.payload;
    },
  },
});

export const { selectCategory, changeState, selectNote } = uiSlice.actions;
export default uiSlice.reducer;
