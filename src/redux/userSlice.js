import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { AuthService } from "../utils/service";

// Регистрация прошла успешно. Тоекн записался! Нужно сделать очистку формы и переход на стринцу подтверждения аккаунта!

export const login = createAsyncThunk(
  "user/login",

  async (user, { dispatch }) => {
    const response = await AuthService.login(user.email, user.password);
    console.log("login");

    localStorage.setItem("token", response.data.accessToken);
    dispatch(setUser(response.data.user));
  }
);

export const registration = createAsyncThunk(
  "user/registration",

  async (user, { dispatch }) => {
    const response = await AuthService.registration(
      user.email,
      user.password,
      user.fullname
    );
    localStorage.setItem("token", response.data.accessToken);
    console.log(response.data.user);
    dispatch(setUser(response.data.user));
  }
);

export const logout = createAsyncThunk(
  "user/logout",

  async () => {
    await AuthService.logout();
    localStorage.removeItem("token");
  }
);

export const checkAuth = createAsyncThunk(
  "user/checkAuth",

  async (_, { dispatch }) => {
    const response = await axios.get("http://localhost:3000/user/refresh", {
      withCredentials: true,
    });

    localStorage.setItem("token", response.data.accessToken);
    dispatch(setUser(response.data.user));
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state) => {
      state.status = "resolved";
      state.isAuth = true;
    });

    builder.addCase(registration.pending, (state, action) => {
      state.user = action.payload;
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(registration.fulfilled, (state) => {
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
    builder.addCase(checkAuth.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(checkAuth.fulfilled, (state) => {
      state.status = "resolved";
      state.isAuth = true;
    });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
