import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";
// import { loading, user, errors } from "./store/reducers";

let state = initialState;

console.log(
  `
  Constants
  =========
  ${Object.keys(C).join(" / ")}

  Initial State
  =============
  ${JSON.stringify(state)})
  `
);

state = appReducer(state, {
  type: C.TOGGLE_LOADING,
  payload: !state.loading,
});

state = appReducer(state, {
  type: C.ADD_USER,
  payload: {
    id: 1,
    name: "John",
    age: 18,
    isEmployed: false,
  },
});

state = appReducer(state, {
  type: C.ADD_USER,
  payload: {
    id: 2,
    name: "Bob",
    age: 34,
    isEmployed: true,
  },
});

state = appReducer(state, {
  type: C.EDIT_USER,
  payload: {
    id: 1,
    revision: {
      age: 21,
    },
  },
});

state = appReducer(state, {
  type: C.ADD_ERROR,
  payload: "Database not found",
});

state = appReducer(state, {
  type: C.CLEAR_ERROR,
  payload: 0,
});

console.log(
  `
  Next State
  ==========
  Loading: ${state.loading}
  Users: ${JSON.stringify(state.users)}
  Errors: ${state.errors}
  `
);
