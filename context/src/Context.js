import React, { useState, useEffect } from 'react';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export default ({ children }) => {
  const [data, setData] = useState({ items: [] });
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
