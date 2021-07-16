import { combineReducers } from "redux";

import { modal } from "./slices";

const rootReducer = combineReducers({
  modal,
});

export default rootReducer;
