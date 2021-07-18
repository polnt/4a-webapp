import { combineReducers } from "redux";

import { modal, authStatus } from "./slices";

const rootReducer = combineReducers({
  modal,
  authStatus,
});

export default rootReducer;
