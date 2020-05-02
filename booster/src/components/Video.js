import React from "react";
import ReactPlayer from "react-player";
import styles from "../styles/App.module.css";

const Video = ({ data, handleNext }) => {
  const { videoId } = data.video[data.video.length - 1].items[0].id;
  return (
    <>
      <div className={styles.placeholder}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing
          controls={true}
          className={styles.player}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Video;
