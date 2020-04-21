console.log("Redux has loaded: ", Redux);

const initialState = ["apple", "banana", "grape"];

const C = {
  ADD: "ADD",
  EDIT: "EDIT",
  REMOVE: "REMOVE",
};

// Create a reducer which is an object containing functions that perform something...
const reducer = Redux.combineReducers({
  list: (state = initialState, { type, payload }) => {
    if (type === C.ADD) return state.concat(payload);
    if (type === C.REMOVE) return state.filter((i, index) => index !== payload);
    if (type === C.EDIT) {
      const currentState = state.concat();
      const currentObjectIndex = currentState.findIndex(
        (i, index) => index === payload.index
      );
      currentState[currentObjectIndex] = payload.content;
      return currentState;
    }
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
    const itemContent = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    itemContent.textContent = listItem;
    item.appendChild(itemContent);
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    container.appendChild(item);
    deleteButton.addEventListener("click", (e) => {
      store.dispatch({
        type: C.REMOVE,
        payload: index,
      });
      render();
    });
    editButton.addEventListener("click", (e) => {
      e.target.style.display = "none";
      const input = document.createElement("input");
      const saveButton = document.createElement("button");
      input.setAttribute("value", listItem);
      saveButton.textContent = "Save";
      itemContent.innerHTML = "";
      itemContent.appendChild(input);
      itemContent.appendChild(saveButton);
      saveButton.addEventListener("click", (e) => {
        store.dispatch({
          type: C.EDIT,
          payload: {
            index,
            content: input.value,
          },
        });
        render();
      });
    });
  });
};

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  // Dispatch an action as an object with key "TYPE" and "PAYLOAD"
  store.dispatch({
    type: C.ADD,
    payload: e.target.children.input.value,
  });

  render();
});

// Log state of your store
console.log(store.getState());

// Render
render();
