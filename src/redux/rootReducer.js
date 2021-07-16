import { combineReducers } from "redux";

import { modal, user } from "./slices";

const rootReducer = combineReducers({
  modal,
  user,
});

export default rootReducer;
