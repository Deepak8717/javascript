import React, { useState, useEffect } from 'react';

const Context = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const Consumer = Context.Consumer;

export default ({ children }) => {
  const [data, setData] = useState({
    items: [],
    dispatch: (action) => setData((state) => Reducer(state, action)),
  });
  useEffect(() => {
    (async () => {
      const request = await fetch(`./Data.json`);
      const json = await request.json();
      return json;
    })()
      .then((resp) => {
        setData({ ...data, items: resp });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
