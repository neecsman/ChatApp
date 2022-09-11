import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService } from "../utils/service";

// Регистрация прошла успешно. Тоекн записался! Нужно сделать очистку формы и переход на стринцу подтверждения аккаунта!

export const login = createAsyncThunk(
  "user/login",

  async (user) => {
    const response = await AuthService.login(user.email, user.password);
    localStorage.setItem("token", response.data.accessToken);
  }
);

export const registration = createAsyncThunk(
  "user/registration",

  async (user) => {
    const response = await AuthService.registration(
      user.email,
      user.password,
      user.fullname
    );
    localStorage.setItem("token", response.data.accessToken);
  }
);

export const logout = createAsyncThunk(
  "user/logout",

  async () => {
    await AuthService.logout();
    localStorage.removeItem("token");
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

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "resolved";
      state.isAuth = true;
    });

    builder.addCase(registration.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "resolved";
      state.isAuth = true;
    });

    builder.addCase(logout.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
    });
  },
});

export default userSlice.reducer;
