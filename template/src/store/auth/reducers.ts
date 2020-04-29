import { AuthActionTypes, AuthState, SET_TOKEN } from "./types";

let initialState: AuthState = {
  token: undefined,
};

let authReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default authReducer;
