import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogsSlice";
import messageReducer from "./messagesSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    dialogs: dialogReducer,
    messages: messageReducer,
    user: userSlice,
  },
});
