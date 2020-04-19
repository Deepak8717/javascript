import C from "../constants";

export const loading = (state = false, action) => {
  if (action.type === C.TOGGLE_LOADING) return Boolean(action.payload);
  else return state;
};
