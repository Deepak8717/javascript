import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case 'ADD_USER':
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    default:
      return state;
  }
};

export const Consumer = Context.Consumer;

export default ({ children }) => {
  const [data, setData] = useState({
    users: [],
    dispatch: (action) => setData((state) => Reducer(state, action)),
  });
  useEffect(() => {
    (async () => {
      const request = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await request.data;
      return data;
    })()
      .then((resp) => {
        setData({ ...data, users: resp });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
