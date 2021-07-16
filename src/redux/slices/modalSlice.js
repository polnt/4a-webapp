import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: null,
  reducers: {
    openModal(_, action) {
      return action.payload;
    },
    closeModal() {
      return null;
    },
    logout() {
      return null;
    },
  },
});

const { actions, reducer } = modalSlice;

export const { openModal, closeModal, logout } = actions;

export default reducer;
