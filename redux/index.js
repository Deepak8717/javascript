console.log("Redux has loaded: ", Redux);

const initialState = ["apple", "banana", "grape"];

const constants = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

// Create a reducer which is an object containing functions that perform something...
const reducer = Redux.combineReducers({
  list: (state = initialState, { type, payload }) => {
    if (type === constants.ADD) return state.concat(payload);
    if (type === constants.REMOVE)
      return state.filter((i, index) => index !== payload);
    return state;
  },
});

// Create a store and pass your reducer
const store = Redux.createStore(reducer);

// Render DOM
const render = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  document.forms[0].reset();
  const state = store.getState();
  state.list.forEach(function (listItem, index) {
    const item = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "Remove";
    item.textContent = listItem;
    item.appendChild(button);
    container.appendChild(item);
    button.addEventListener("click", (e) => {
      store.dispatch({
        type: constants.REMOVE,
        payload: index,
      });
      render();
    });
  });
};

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  // Dispatch an action as an object with key "TYPE" and "PAYLOAD"
  store.dispatch({
    type: constants.ADD,
    payload: e.target.children.input.value,
  });

  render();
});

// Log state of your store
console.log(store.getState());

// Render
render();
