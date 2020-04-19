import C from "./constants";
import { loading, user } from "./store/reducers";

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
  Initial state: ${userState}
  Action: ${JSON.stringify(userAction)}
  New state: ${JSON.stringify(nextUserState)}
  `
);
