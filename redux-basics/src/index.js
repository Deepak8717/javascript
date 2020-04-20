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
const userState = null;
const userAction = {
  type: C.CREATE_USER,
  payload: {
    name: "Dummy",
    age: 18,
    isEmployed: false,
  },
};
const nextUserState = user(userState, userAction);
console.log(
  `
  CREATE USER
  ===========
  Initial state: ${userState}
  Action: ${JSON.stringify(userAction)}
  New state: ${JSON.stringify(nextUserState)}
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
