import { AuthActionTypes, SET_TOKEN } from "./types";

export let setToken = (token: string | undefined): AuthActionTypes => ({
  type: SET_TOKEN,
  token,
});
