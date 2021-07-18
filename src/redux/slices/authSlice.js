import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authStatus",
  initialState: { isPending: true },
  reducers: {
    signIn(_, action) {
      return { isSignedIn: action.payload };
    },
    setAuth(state, action) {
      return { ...state, ...action.payload };
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

export const { setAuth, signIn, signOut, logout } = actions;

export default reducer;
