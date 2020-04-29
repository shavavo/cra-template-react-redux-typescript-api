/** State */
export interface AuthState {
  token?: string;
}

/** Actions */
export const SET_TOKEN = "SET_TOKEN";
export type SET_TOKEN = typeof SET_TOKEN;

export interface SetToken {
  type: SET_TOKEN;
  token: string | undefined;
}

export type AuthActionTypes = SetToken;
