import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogsSlice";
import messageReducer from "./messagesSlice";

export default configureStore({
  reducer: {
    dialogs: dialogReducer,
    messages: messageReducer,
  },
});
