import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Note from "../models/Note";
import storage from "../utils/storage";

const initialState: { note: Note } = {
  note: {
    id: "",
    title: "",
    contents: "",
    backgroundColor: "",
    priority: "low",
    tag: [],
    createdAt: "",
    editedAt: "",
    isPinned: false,
    isArchived: false,
    isDeleted: false,
  },
};

const writingNoteSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.note.title = action.payload;
    },
    setContents: (state, action: PayloadAction<string>) => {
      state.note.contents = action.payload;
    },
    setTag: (state, action: PayloadAction<string[]>) => {
      state.note.tag = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.note.backgroundColor = action.payload;
    },
    setNote: (state, action: PayloadAction<Note>) => {
      state.note.id = action.payload.id;
      state.note.createdAt = action.payload.createdAt;
      state.note.title = action.payload.title;
      state.note.contents = action.payload.contents;
      state.note.backgroundColor = action.payload.backgroundColor;
      state.note.tag = action.payload.tag;
    },
    clearWritingNote: (state) => {
      state.note = {
        id: "",
        title: "",
        contents: "",
        backgroundColor: "",
        priority: "low",
        tag: [],
        createdAt: "",
        editedAt: "",
        isPinned: false,
        isArchived: false,
        isDeleted: false,
      };
    },
    saveCreatingNote: (
      state,
      action: PayloadAction<{ id: string; createdAt: string }>
    ) => {
      state.note.id = action.payload.id;
      state.note.createdAt = action.payload.createdAt;
      const noteList = storage.get<Note[]>("noteList") || [];
      const newNoteList = [...noteList, state.note];
      storage.set("noteList", newNoteList);
    },
    saveEditingNote: (state, action: PayloadAction<Note>) => {
      state.note.title = action.payload.title;
      state.note.contents = action.payload.contents;
      state.note.backgroundColor = action.payload.backgroundColor;
      state.note.priority = action.payload.priority;
      state.note.tag = action.payload.tag;

      const noteList = storage.get<Note[]>("noteList");
      const newNoteList = noteList.map((note) => {
        if (note.id === action.payload.id) {
          return state.note;
        }
        return note;
      });
      storage.set("noteList", newNoteList);
    },
  },
});

export const {
  setNote,
  setTitle,
  setContents,
  setTag,
  setBackgroundColor,
  clearWritingNote,
  saveCreatingNote,
  saveEditingNote,
} = writingNoteSlice.actions;
export default writingNoteSlice.reducer;
