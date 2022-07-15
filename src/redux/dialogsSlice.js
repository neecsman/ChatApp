import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dialogsAPI } from "utils/api";

export const fetchDialogs = createAsyncThunk(
  "dialogs/fetchDialogs",

  async () => {
    let all = await dialogsAPI.getAll().then(({ data }) => {
      return data;
    });
    return all;
  }
);

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState: {
    dialogs: [],
    currentDialog: null,
    status: null,
    error: null,
  },
  reducers: {
    setCurrentDialog(state, action) {
      state.currentDialog = action.payload;
    },
  },
  extraReducers: {
    [fetchDialogs.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchDialogs.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.dialogs = action.payload;
    },
    [fetchDialogs.rejected]: () => {},
  },
});

export const { setCurrentDialog } = dialogsSlice.actions;
export default dialogsSlice.reducer;
