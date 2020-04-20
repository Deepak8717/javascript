import C from "../constants";
import { combineReducers } from "redux";

export const loading = (state = false, action) =>
  action.type === C.TOGGLE_LOADING ? Boolean(action.payload) : state;

export const users = (state = [], action) => {
  switch (action.type) {
    case C.ADD_USER:
      return state.concat(action.payload);
    case C.EDIT_USER:
      const originalState = [...state];
      const userToEdit = originalState.filter(
        (i) => i.id === action.payload.id
      );
      const userToEditIndex = originalState.findIndex(
        (i) => i.id === action.payload.id
      );
      const revisedObject = Object.assign(
        {},
        ...userToEdit,
        action.payload.revision
      );
      originalState.splice(userToEditIndex, 1, revisedObject);
      return originalState;
    case C.DELETE_USER:
      return state.filter((i) => i.id !== action.payload.id);
    default:
      return state;
  }
};

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return state.concat(action.payload);
    case C.DELETE_ERROR:
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
