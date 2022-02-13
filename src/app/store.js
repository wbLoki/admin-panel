import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../features/state/stateSlice";
import usersReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    state: stateReducer,
    users: usersReducer,
  },
});
