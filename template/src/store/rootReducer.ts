import { combineReducers } from "redux";

import templateReducer from "./template/reducers";
import authReducer from "./auth/reducers";

const rootReducer = combineReducers({
  template: templateReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
