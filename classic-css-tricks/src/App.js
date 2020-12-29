import React, { useState, useEffect } from "react";
import Error from "./components/Error";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Page from "./components/Page";

const App = () => {
  const [data, setData] = useState({
    count: 0,
    articles: null,
    error: false,
    loading: false,
  });
  const { count, error, articles, loading } = data;
  const handleClick = () => {
    setData((prevData) => {
      return {
        ...prevData,
        count: prevData.count + 1,
      };
    });
  };
  const handlePreviousClick = () => {
    setData((prevData) => {
      return {
        ...prevData,
        count: prevData.count - 1,
      };
    });
  };
  useEffect(() => {
    const getArticles = () => {
      (async () => {
        const r = await fetch(
          `https://css-tricks.com/wp-json/wp/v2/posts?page=${count}`
        );
        const j = await r.json();
        return j;
      })()
        .then((d) => {
          setData((prevData) => {
            return {
              ...prevData,
              articles: d,
              loading: false,
            };
          });
        })
        .catch(() => {
          setData((prevData) => {
            return {
              ...prevData,
              error: true,
              loading: false,
            };
          });
        });
    };
    if (count > 0) {
      setData((prevData) => {
        return {
          ...prevData,
          loading: true,
        };
      });
      getArticles();
    }
    //
  }, [count]);
  if (error) return <Error handleClick={handleClick} />;
  if (loading)
    return (
      <Loading
        count={count}
        handleClick={handleClick}
        handlePreviousClick={handlePreviousClick}
      />
    );
  if (articles === null) return <Home handleClick={handleClick} />;
  return (
    <Page
      count={count}
      articles={articles}
      handleClick={handleClick}
      handlePreviousClick={handlePreviousClick}
    />
  );
};

export default App;
