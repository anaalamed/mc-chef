import { combineReducers } from "redux";
import app_reducer from "./slices/app.slice";

const rootReducer = combineReducers({
  app: app_reducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>