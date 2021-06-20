import Head from "next/head";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import list from "../common/list";

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
        <title>TTC Bus</title>
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
          <span className="promotion">
            Check out &nbsp;
            <a
              href="https://ttc-subway.vercel.app"
              target="__blank"
              rel="noopener noreferrer"
            >
              Subway
            </a>
            &nbsp;/&nbsp;
            <a
              href="https://ttc-streetcar.surge.sh"
              target="__blank"
              rel="noopener noreferrer"
            >
              Streetcar
            </a>
          </span>
          <h1>Please pick your bus of choice:</h1>
          <p>
            This application allow rider/user to take a virtual ride in buses.
            This application may be useful for accessibility purposes. It is
            recommended to buffer/sync entire video on your device before
            starting the trip. Source code for this application is located in{" "}
            <code>ttc-bus</code> folder.
          </p>
          <div className="lines">
            {list.map(({ type, line, direction, video }, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    type === "express"
                      ? "line line--express"
                      : type === "dt"
                      ? "line line--dt"
                      : "line"
                  }
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
