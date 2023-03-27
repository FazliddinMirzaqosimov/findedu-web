import { setItem } from "./../helpers/persistance-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  id?: string;
  email?: string;
  access_token?: string;
}

interface AuthError {
  message?: string;
}

export interface AuthState {
  isLoading?: boolean;
  loggedIn?: boolean;
  user: AuthUser | null;
  errorL?: AuthError | undefined;
  errorR?: AuthError | undefined;
  errorO?: AuthError | undefined;
}

const initialState: AuthState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  errorL: undefined,
  errorO: undefined,
  errorR: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action: PayloadAction<AuthUser>) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      action.payload.access_token &&
        setItem("token", action.payload.access_token);
    },
    logUserFailure: (state, action: PayloadAction<AuthError>) => {
      state.isLoading = false;
      state.errorL = action.payload;
    },
    signPreError: (state) => {
      state.errorL = undefined;
      state.errorR = undefined;
      state.errorO = undefined;
    },
    regUserFailure: (state, action: PayloadAction<AuthError>) => {
      state.isLoading = false;
      state.errorR = action.payload;
    },
    otpUserFailure: (state, action: PayloadAction<AuthError>) => {
      state.isLoading = false;
      state.errorO = action.payload;
    },
  },
});

export const {
  signUserStart,
  signUserSuccess,
  logUserFailure,
  signPreError,
  regUserFailure,
  otpUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
