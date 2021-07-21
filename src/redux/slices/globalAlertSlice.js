import { createSlice } from "@reduxjs/toolkit";

const globalAlertSlice = createSlice({
  name: "globalAlert",
  initialState: null,
  reducers: {
    setGlobalAlert(_, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = globalAlertSlice;

export const { setGlobalAlert } = actions;

export default reducer;
