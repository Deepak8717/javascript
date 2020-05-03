import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

const Data = [
  {
    id: 1,
    name: 'ABC',
    age: 21,
  },
  {
    id: 2,
    name: 'DEF',
    age: 22,
  },
  {
    id: 3,
    name: 'GHI',
    age: 23,
  },
  {
    id: 4,
    name: 'JKL',
    age: 24,
  },
];

const Context = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    default:
      return state;
  }
};

export const Consumer = Context.Consumer;

export default ({ children }) => {
  const [data, setData] = useState({
    items: Data,
    // items: [],
    dispatch: (action) => setData((state) => Reducer(state, action)),
  });
  // useEffect(() => {
  //   (async () => {
  //     const request = await fetch(`./Data.json`);
  //     const json = await request.json();
  //     return json;
  //   })()
  //     .then((resp) => {
  //       setData({ ...data, items: resp });
  //     })
  //     .catch((err) => console.log(err));
  //   // eslint-disable-next-line
  // }, []);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
