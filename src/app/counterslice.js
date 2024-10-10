import { createSlice } from '@reduxjs/toolkit';

const counterslice = createSlice({
  name: "keepnotes",
  initialState: {
    data:[]
  },
  reducers: {
    addNote: (state , action) => {
       state.data.push(action.payload); 
    },
    deleteNote: (state, action) => {
      state.data = state.data.filter(note => note.id !== action.payload);
    },
  }
});

export const { addNote, deleteNote, updateNote } = counterslice.actions;
export default counterslice.reducer;
