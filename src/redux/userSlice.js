import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService } from "../utils/service";

//Написал асинхронные запросы на логин и логаут, нужно добавить диспатчи при регистрации и логине и протестировать

export const login = createAsyncThunk(
  "user/login",

  async (user) => {
    return await AuthService.login(user.email, user.password);
  }
);

export const logout = createAsyncThunk(
  "user/logout",

  async () => {
    return await AuthService.logout();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuth: false,
    status: null,
    error: null,
  },

  reducers: {
    setLogout(state) {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      (state.status = "loading"), (state.error = null);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      (state.user = action.payload), (state.status = "resolved");
      state.isAuth = true;
    });
    builder.addCase(logout.pending, (state, action) => {
      (state.status = "loading"), (state.error = null);
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
    });
  },
  //   extraReducers: {
  //     [login.pending]: (state) => {
  //       state.status = "loading";
  //       state.error = null;
  //     },
  //     [login.fulfilled]: (state, action) => {
  //       state.status = "resolved";
  //       state.user = action.payload;
  //       state.isAuth = true;
  //     },
  //     [login.rejected]: () => {},
  //   },
});

export default userSlice.reducer;
