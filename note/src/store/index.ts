import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import tagReducer from "./tagSlice";
import uiReducer from "./uiSlice";
import writingNoteReducer from "./writingNoteSlice";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    tagList: tagReducer,
    ui: uiReducer,
    writingNote: writingNoteReducer,
  },
});

export const notesSelector = (state: RootState) => state.notes;
export const tagListSelector = (state: RootState) => state.tagList;
export const uiSelector = (state: RootState) => state.ui;
export const writingNoteSelector = (state: RootState) => state.writingNote;

export type RootState = ReturnType<typeof store.getState>; // Redux 스토어의 state를 나타내는 타입
export type AppDispatch = typeof store.dispatch; // Redux 액션을 dispatch하는 함수의 타입

export default store;
