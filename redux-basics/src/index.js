import C from "./constants";
import { loading, users } from "./initialState.json";

console.log(
  `
    Redux Basics
    ============
    The loading setting is ${loading}.
    Total number of default users are ${users.length}.

    Constants
    =========
    ${Object.keys(C).join(" / ")}
  `
);
