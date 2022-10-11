import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MessagesService } from "../utils/service";
import { socket } from "../utils/api/socketAPI";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (dialogId) => {
    let all = await MessagesService.getMessagesByDialogId(dialogId).then(
      ({ data }) => {
        return data;
      }
    );
    return all;
  }
);

export const sendMessages = createAsyncThunk(
  "messages/sendMessages",
  async (message) => {
    await MessagesService.sendMessages(message);
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    isLoading: false,
    status: null,
    error: null,
  },

  reducers: {
    setMessages(state, action) {
      state.messages = [...state.messages, action.payload];
    },
  },

  extraReducers: {
    [fetchMessages.pending]: (state) => {
      state.isLoading = true;
      state.status = "loading";
      state.error = null;
    },
    [fetchMessages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "resolved";
      state.messages = action.payload;
    },
    [fetchMessages.rejected]: () => {},

    [sendMessages.pending]: (state) => {
      state.isLoading = true;
      state.status = "loading";
      state.error = null;
    },

    [sendMessages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "resolved";
    },

    [sendMessages.rejected]: () => {},
  },
});
export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;
