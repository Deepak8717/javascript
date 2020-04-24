import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Library from "./components/Library";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";

const App = () => {
  const [data, setData] = useState({
    error: false,
    loading: false,
    content: [],
    currentLib: [],
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch(`https://api.cdnjs.com/libraries/`);
        const json = await request.json();
        setData({ ...data, loading: false, content: json });
      } catch (err) {
        setData({ ...data, error: true });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.content || data.content.length === 0) return <Loading />;
  return <Library data={data} setData={setData} />;
};

export default App;
