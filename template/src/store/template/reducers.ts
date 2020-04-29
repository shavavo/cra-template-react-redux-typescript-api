import { TemplateActionsType, TemplateState, SET_HELLO } from "./types";

let initialState: TemplateState = {
  hello: "",
};

let templateReducer = (
  state: TemplateState = initialState,
  action: TemplateActionsType
): TemplateState => {
  switch (action.type) {
    case SET_HELLO:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};

export default templateReducer;
