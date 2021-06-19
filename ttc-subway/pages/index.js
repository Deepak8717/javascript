import Head from "next/head";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import list from "./list";

export default function Home() {
  const [data, setData] = useState({
    station: 0,
    direction: null,
  });
  const { station, direction } = data;
  const handleClick = (station, direction) => {
    setData({
      station,
      direction,
    });
  };
  return (
    <>
      <Head>
        <title>TTC Subway</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/8/87/TTC.svg"
        />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>

      {station === 0 && direction === null ? (
        <main>
          <aside>
            <a
              className="github-button"
              href="https://github.com/tpkahlon/javascript"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-show-count="true"
              aria-label="Star tpkahlon/javascript on GitHub"
            >
              Star
            </a>
          </aside>
          <h1>Please pick your line of choice:</h1>
          <p>
            This application allow rider/user who are present in middle blocks
            of subway line to get a digital, front/rear view. This application
            may be useful for accessibility purposes. It is recommended to
            buffer/sync entire video on your device before starting the trip.
            Source code for this application is located in{" "}
            <code>ttc-subway</code> folder.
          </p>
          <div className="lines">
            {list.map(({ line, direction, video }, idx) => {
              return (
                <div
                  className={`line line--${line}`}
                  onClick={() => handleClick(line, video)}
                >
                  {line}
                  <span>{direction}</span>
                </div>
              );
            })}
          </div>
        </main>
      ) : (
        <main>
          <ReactPlayer
            url={`./${station}-${direction}.mp4`}
            controls
            playing
            width="100vw"
            height="100vh"
          />
        </main>
      )}
    </>
  );
}
