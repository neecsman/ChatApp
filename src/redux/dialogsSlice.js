import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DialogsService } from "../utils/service";

export const fetchDialogs = createAsyncThunk(
  "dialogs/fetchDialogs",

  async (id, { dispatch }) => {
    let response = await DialogsService.getDialogs(id);
    dispatch(setDialogs(response.data));
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
    setDialogs(state, action) {
      state.dialogs = action.payload;
    },
  },
  extraReducers: {
    [fetchDialogs.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchDialogs.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [fetchDialogs.rejected]: () => {},
  },
});

export const { setCurrentDialog, setDialogs } = dialogsSlice.actions;
export default dialogsSlice.reducer;
