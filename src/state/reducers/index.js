import { combineReducers } from "redux";

// Import all reducers
import userReducer from "./userReducers";

const reducers = combineReducers({
  users: userReducer,
});

export default reducers;
