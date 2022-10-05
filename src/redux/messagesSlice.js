import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MessagesService } from "../utils/service";

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

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    isLoading: false,
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
  },
});
export const { setCurrentMessages } = messageSlice.actions;
export default messageSlice.reducer;
