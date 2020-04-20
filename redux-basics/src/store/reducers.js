import C from "../constants";
import { combineReducers } from "redux";

export const loading = (state = false, action) =>
  action.type === C.TOGGLE_LOADING ? Boolean(action.payload) : state;

export const users = (state = [], action) => {
  switch (action.type) {
    case C.ADD_USER:
      return state.concat(action.payload);
    case C.EDIT_USER:
      const userToEdit = state.filter((i) => i.id === action.payload.id);
      const revisedUser = Object.assign(
        {},
        ...userToEdit,
        action.payload.revision
      );
      return revisedUser;
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

export default combineReducers({
  loading,
  users,
  errors,
});
