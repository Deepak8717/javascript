import C from "./constants";
import { loading } from "./store/reducers";

console.log(
  `
  Constants
  =========
  ${Object.keys(C).join(" / ")}
  `
);

// LOADING
const state = false;
const action = {
  type: C.TOGGLE_LOADING,
  payload: !state,
};
const nextState = loading(state, action);
console.log(
  `
  Initial state: ${state}
  Action: ${JSON.stringify(action)}
  New state: ${nextState}
  `
);
