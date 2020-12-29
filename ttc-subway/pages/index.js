import Head from "next/head";
import React, { useState } from "react";
import ReactPlayer from "react-player";

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
            <div
              className="line line--1"
              onClick={() =>
                handleClick(1, "https://youtu.be/hiARDxmAWi8?t=12")
              }
            >
              1<span>NB</span>
            </div>
            <div
              className="line line--1"
              onClick={() =>
                handleClick(1, "https://youtu.be/fksb0X8z9Cs?t=57")
              }
            >
              1<span>SB</span>
            </div>
            <div
              className="line line--2"
              onClick={() =>
                handleClick(2, "https://youtu.be/sZEJRygO0jE?t=53")
              }
            >
              2<span>EB</span>
            </div>
            <div
              className="line line--2"
              onClick={() =>
                handleClick(2, "https://youtu.be/8lQOHmEQ8FQ?t=34")
              }
            >
              2<span>WB</span>
            </div>
            <div
              className="line line--3"
              onClick={() =>
                handleClick(3, "https://youtu.be/cTUf4N6-P50?t=38")
              }
            >
              3<span>EB</span>
            </div>
            <div
              className="line line--3"
              onClick={() =>
                handleClick(3, "https://youtu.be/kQjK8tHTqnE?t=32")
              }
            >
              3<span>WB</span>
            </div>
            <div
              className="line line--4"
              onClick={() =>
                handleClick(4, "https://youtu.be/4zEF7aYgCv0?t=57")
              }
            >
              4<span>EB</span>
            </div>
            <div
              className="line line--4"
              onClick={() =>
                handleClick(4, "https://youtu.be/qCQWeUktbp4?t=58")
              }
            >
              4<span>WB</span>
            </div>
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
