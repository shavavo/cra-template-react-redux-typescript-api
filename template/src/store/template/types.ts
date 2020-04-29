/** State */
export interface TemplateState {
  hello: string;
}

/** Actions */
export const SET_HELLO = "SET_HELLO";
export type SET_HELLO = typeof SET_HELLO;

export interface SetProperty {
  type: SET_HELLO;
  payload: string;
}

export type TemplateActionsType = SetProperty;
