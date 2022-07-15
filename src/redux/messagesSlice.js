import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { messagesAPI } from "utils/api";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (dialogId) => {
    let all = await messagesAPI
      .getMessageByDialogId(dialogId)
      .then(({ data }) => {
        return data;
      });
    return all;
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    status: null,
    error: null,
  },
  reducers: {
    setCurrentMessages(state, action) {
      state.messages = action.payload;
    },
  },
  extraReducers: {
    [fetchMessages.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchMessages.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.messages = action.payload;
    },
    [fetchMessages.rejected]: () => {},
  },
});
export const { setCurrentMessages } = messageSlice.actions;
export default messageSlice.reducer;
