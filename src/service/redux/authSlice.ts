import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
  loggedIn: boolean;
  user: object | null;
  error: string | object | null | boolean;
}

const initialState: AuthState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login

    loginUserStart: (state) => {
      state.isLoading = true;
    },

    loginUserSuccess: (state) => {},

    loginUserFailure: (state) => {},

    // Register
    registerUserStart: (state) => {
      state.isLoading = true;
    },

    registerUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },

    registerUserFailure: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  loginUserSuccess,
  loginUserFailure,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
