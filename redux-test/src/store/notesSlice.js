import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(
        (note, index) => index !== action.payload
      );
    },
    clearNotes: (state) => {
      state.notes = [];
    },
  },
});

export const { addNote, removeNote, clearNotes } = notesSlice.actions;

export const selectNotes = (state) => state.notes.notes;

export default notesSlice.reducer;
