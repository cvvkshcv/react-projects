import { combineReducers } from "redux";
import { countReducer } from "./reducers/countReducer";

export const reducers = combineReducers({
  count: countReducer
});
