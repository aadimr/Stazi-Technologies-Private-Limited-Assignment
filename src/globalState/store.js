import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./Reducers"

export const store = configureStore({
  reducer: {
    app: paginationSlice,
  },
});