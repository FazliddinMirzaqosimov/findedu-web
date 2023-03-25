import { setItem } from "./../helpers/persistance-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthUser {
  id?: string;
  email?: string;
  access_token?: string;
}

interface AuthError {
  message?: string;
}

interface AuthState {
  isLoading?: boolean;
  loggedIn?: boolean;
  user: AuthUser | null;
  error?: AuthError | any;
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
    signUserSuccess: (state, action: PayloadAction<AuthUser>) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      action.payload.access_token &&
        setItem("token", action.payload.access_token);
    },
    signUserFailure: (state, action: PayloadAction<AuthError>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure } =
  authSlice.actions;

export default authSlice.reducer;
