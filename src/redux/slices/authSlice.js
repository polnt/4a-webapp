import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: { isPending: true },
  reducers: {
    trySignIn(_, action) {
      return { isSignedIn: action.payload };
    },
    signIn() {
      return { isSignedIn: true };
    },
    signOut() {
      return { isSignedIn: false };
    },
    logout() {
      return { isSignedIn: false };
    },
  },
});

const { actions, reducer } = authSlice;

export const { trySignIn, signIn, signOut, logout } = actions;

export default reducer;
