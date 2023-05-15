export type CountType =
  | { type: "add" }
  | { type: "substract" }
  | { type: "multiply" }
  | { type: "divider" }
  | { type: "custom"; payload: number };

export const initialState = {
  count: 10,
};
export const countReducer = (state: typeof initialState, action: CountType) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "substract":
      return {
        ...state,
        count: state.count - 1,
      };
    case "multiply":
      return {
        ...state,
        count: state.count * 2,
      };
    case "divider":
      return {
        ...state,
        count: state.count / 2,
      };
    case "custom":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
