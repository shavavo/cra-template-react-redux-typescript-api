import { TemplateActionsType, SET_HELLO } from "./types";

export let setSpaces = (payload: string): TemplateActionsType => ({
  type: SET_HELLO,
  payload,
});
