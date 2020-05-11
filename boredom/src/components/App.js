import React, { useState, useEffect } from 'react';
import Item from './Item';

const App = () => {
  const initialState = {
    content: [],
    loading: false,
    changedValue: null,
    isChanged: false,
    error: null,
  };
  const [data, setData] = useState(initialState);
  const handleClick = () => {
    getData();
  };
  const getData = () => {
    setData({ ...data, loading: true });
    (async () => {
      let url = 'https://www.boredapi.com/api/activity/';
      const response = await fetch(url);
      const json = await response.json();
      return json;
    })()
      .then((d) => setData({ ...data, content: d, loading: false }))
      .catch(() => setData({ ...data, error: true }));
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <p>Something went wrong!</p>;
  if (data.loading) return <p>Loading...</p>;
  return (
    <>
      <Item content={data.content} key={data.content.key} />
      <button className="pure-button pure-button-primary" onClick={handleClick}>
        See another activity
      </button>
    </>
  );
};

export default App;
