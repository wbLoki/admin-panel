import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    value: "display",
  },
  reducers: {
    displayState: (state) => {
      state.value = "display";
    },
    editState: (state) => {
      state.value = "edit";
    },
    deleteState: (state) => {
      state.value = "delete";
    },
  },
});

export const { displayState, editState, deleteState } = stateSlice.actions;

export default stateSlice.reducer;
