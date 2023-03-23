import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
  loggedIn: boolean;
  user: object | null;
}

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
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
    registerUserSuccess: (state) => {},
    registerUserFailure: (state) => {},
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
