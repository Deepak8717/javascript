import C from "../constants";

export const loading = (state = false, action) => {
  action.type === C.TOGGLE_LOADING ? Boolean(action.payload) : state;
};

export const user = (state = null, action) =>
  action.type === C.CREATE_USER ? action.payload : state;
