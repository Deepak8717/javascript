import React from "react";
import ReactPlayer from "react-player";

const Video = ({ data, handleNext }) => {
  const { videoId } = data.video[data.video.length - 1].items[0].id;
  return (
    <>
      <div className="placeholder">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing
          controls={true}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Video;
