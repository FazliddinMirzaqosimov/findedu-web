import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoading?: boolean;
  loggedIn?: boolean;
  user?: object | null;
  error?: string | object | null | boolean;
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
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action: PayloadAction<AuthState>) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    signUserFailure: (state, action: PayloadAction<AuthState>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // loginUserStart: (state) => {
    //   state.isLoading = true;
    // },

    // loginUserSuccess: (state) => {
    //   state.loggedIn = true;
    //   state.isLoading = false;
    // },

    // loginUserFailure: (state) => {
    //   state.isLoading = false;
    // },

    // // Register
    // registerUserStart: (state) => {
    //   state.isLoading = true;
    // },

    // registerUserSuccess: (state) => {
    //   state.loggedIn = true;
    //   state.isLoading = false;
    // },

    // registerUserFailure: (state) => {
    //   state.error = true;
    //   state.isLoading = false;
    // },
  },
});

export const {
  // loginUserStart,
  // registerUserStart,
  // loginUserSuccess,
  // loginUserFailure,
  // registerUserSuccess,
  // registerUserFailure,
  signUserStart,
  signUserSuccess,
  signUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
