import { combineReducers } from "redux";

import { modal, authStatus, globalAlert } from "./slices";

const rootReducer = combineReducers({
  modal,
  authStatus,
  globalAlert,
});

export default rootReducer;
