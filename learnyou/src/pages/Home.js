import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Repos from "../components/Repos";

const Home = () => {
  const URL = `https://api.github.com/users/workshopper/repos`;
  const [data, setData] = useState({ repos: [], error: false, loading: false });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch(URL);
        const json = await request.json();
        setData({ ...data, repos: json, loading: false });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.repos || data.repos.length === 0) return <Loading />;
  return <Repos repos={data.repos} />;
};

export default Home;
