import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = ["태그1", "태그2"];

const tagSlice = createSlice({
  name: "tag",
  initialState: initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    deleteTag: (state, action) => {
      state = state.filter((tag) => tag !== action.payload);
    },
  },
});

export const { addTag, deleteTag } = tagSlice.actions;
export default tagSlice.reducer;
