import C from "./constants";
import { loading, user, errors } from "./store/reducers";

console.log(
  `
  Constants
  =========
  ${Object.keys(C).join(" / ")}
  `
);

// LOADING
const loadingState = false;
const loadingAction = {
  type: C.TOGGLE_LOADING,
  payload: !loadingState,
};
const nextLoadingState = loading(loadingState, loadingAction);
console.log(
  `
  TOGGLE LOADING
  ==============
  Initial state: ${loadingState}
  Action: ${JSON.stringify(loadingAction)}
  New state: ${nextLoadingState}
  `
);

// USER
// ADD USER
const addUserState = null;
const addUserAction = {
  type: C.ADD_USER,
  payload: {
    name: "Dummy",
    age: 18,
    isEmployed: false,
  },
};
const nextAddUserState = user(addUserState, addUserAction);
console.log(
  `
  ADD USER
  ========
  Initial state: ${addUserState}
  Action: ${JSON.stringify(addUserAction)}
  New state: ${JSON.stringify(nextAddUserState)}
  `
);
// EDIT USER
const editUserState = {
  name: "John",
  age: 18,
  isEmployed: false,
};
const editUserAction = {
  type: C.EDIT_USER,
  payload: {
    age: 22,
  },
};
const nextEditUserState = user(editUserState, editUserAction);
console.log(
  `
  EDIT USER
  =========
  Initial state: ${JSON.stringify(editUserState)}
  Action: ${JSON.stringify(editUserAction)}
  New state: ${JSON.stringify(nextEditUserState)}
  `
);

// ERRORS
// ADD ERROR
const addErrorState = ["Not Found", "Something happened"];
const addErrorAction = {
  type: C.ADD_ERROR,
  payload: "Database not found",
};
const nextAddErrorState = errors(addErrorState, addErrorAction);
console.log(
  `
  ADD ERROR
  =========
  Initial state: ${addErrorState}
  Action: ${JSON.stringify(addErrorAction)}
  New state: ${nextAddErrorState}
  `
);
// CLEAR ERROR
const clearErrorState = ["Not Found", "Something happened"];
const clearErrorAction = {
  type: C.CLEAR_ERROR,
  payload: 0,
};
const nextClearErrorState = errors(clearErrorState, clearErrorAction);
console.log(
  `
  CLEAR ERROR
  ===========
  Initial state: ${clearErrorState}
  Action: ${JSON.stringify(clearErrorAction)}
  New state: ${nextClearErrorState}
  `
);
