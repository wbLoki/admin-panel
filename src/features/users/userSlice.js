import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newState = action.payload;
      state = [...state, ...newState];
    },
    editUser: (state) => {
      state = "edit";
    },
    deleteUser: (state) => {
      state = "delete";
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
