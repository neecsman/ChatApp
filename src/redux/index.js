import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogsSlice";

export default configureStore({
  reducer: {
    dialogs: dialogReducer,
  },
});
