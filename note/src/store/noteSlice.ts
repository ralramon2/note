import Note from "./../models/Note";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NoteState {
  noteList: Note[];
}

const initialState: NoteState = {
  noteList: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    setNoteList: (state, action: PayloadAction<Note[]>) => {
      state.noteList = action.payload;
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.noteList.push({
        id: action.payload.id,
        title: action.payload.title,
        contents: action.payload.contents,
        backgroundColor: action.payload.backgroundColor,
        priority: action.payload.priority,
        tag: action.payload.tag,
        createdAt: action.payload.createdAt,
        editedAt: action.payload.editedAt,
        isPinned: action.payload.isPinned,
        isArchived: action.payload.isArchived,
        isDeleted: action.payload.isDeleted,
      });
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const note = state.noteList.find((note) => note.id === action.payload.id);
      if (note) {
        note.title = action.payload.title;
        note.contents = action.payload.contents;
        note.backgroundColor = action.payload.backgroundColor;
        note.priority = action.payload.priority;
        note.tag = action.payload.tag;
      }
    },
    deleteNote: (state, action) => {
      state.noteList = state.noteList.filter(
        (note) => note.id !== action.payload.id
      );
    },
  },
});

export const { setNoteList, addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
