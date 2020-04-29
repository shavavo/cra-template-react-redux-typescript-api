import { combineReducers } from "redux";

import templateReducer from "./template/reducers";

const rootReducer = combineReducers({
  template: templateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
