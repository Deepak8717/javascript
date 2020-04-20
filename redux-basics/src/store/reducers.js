import C from "../constants";

export const loading = (state = false, action) => {
  action.type === C.TOGGLE_LOADING ? Boolean(action.payload) : state;
};

export const user = (state = null, action) => {
  switch (action.type) {
    case C.ADD_USER:
      return action.payload;
    case C.EDIT_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return state.concat(action.payload);
    case C.CLEAR_ERROR:
      return state.filter((i, index) => index !== action.payload);
    default:
      return state;
  }
};
