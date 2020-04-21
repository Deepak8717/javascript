import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

const App = () => {
  const KEY = process.env.REACT_APP_KEY;
  const [data, setData] = useState({
    key: KEY,
    video: [],
    nextVideo: null,
    loading: false,
    error: null,
    isFirstPage: true,
  });
  const handleVideo = () => {
    setData({ ...data, loading: true });
    const getVideo = async () => {
      try {
        const URL =
          data.nextVideo === null
            ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=inspirational&safeSearch=strict&videoDefinition=high&type=video&videoDuration=any&key=${data.key}`
            : `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=inspirational&safeSearch=strict&videoDefinition=high&type=video&videoDuration=any&key=${data.key}&pageToken=${data.nextVideo}`;
        const request = await fetch(URL);
        const json = await request.json();
        return json;
      } catch (err) {
        setData({ ...data, error: err, loading: false });
      }
    };
    getVideo()
      .then((response) => {
        if (response.error) {
          setData({ ...data, error: response, loading: false });
          return;
        }
        setData({
          ...data,
          video: data.video.concat(response),
          loading: false,
          nextVideo: response.nextPageToken,
          isFirstPage: false,
        });
      })
      .catch((err) => setData({ ...data, error: err }));
  };
  const handleNext = () => {
    handleVideo();
  };
  useEffect(() => {
    handleVideo();
    // eslint-disable-next-line
  }, []);
  if (data.loading) return <Loading />;
  if (data.error) return <ErrorMessage error={data.error} />;
  if (data.video && data.video.length !== 0)
    return <Video data={data} setData={setData} handleNext={handleNext} />;
  else return <></>;
};

export default App;
