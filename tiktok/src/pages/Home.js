import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Videos from "../components/Videos";

const Home = () => {
  const URL = `./data.json`;
  // const URL = `https://m.tiktok.com/api/item_list/?count=30&id=1&type=5&secUid=&maxCursor=0&minCursor=0&sourceType=12&appId=1233&region=CA&language=en`;
  const [data, setData] = useState({
    videos: [],
    error: false,
    loading: false,
    count: 100,
    page: 1,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch(URL);
        const json = await request.json();
        setData({ ...data, videos: json, loading: false });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  const handleNext = () => alert("Sadly, TikTok API is not accessible.");
  if (data.error) return <ErrorMessage />;
  if (!data.videos || data.videos.length === 0) return <Loading />;
  return <Videos videos={data.videos} handleNext={handleNext} />;
};

export default Home;
