import React from 'react';
import ReactPlayer from 'react-player';
import Frame from './Frame';

const Player = ({ url }) => {
  // const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  const iframe = `
    <iframe src="https://www.hlsplayer.net/" frameborder="no" allowtransparency="true" allowfullscreen="true">
    </iframe>
  `;
  return (
    <>
      {url === null ? (
        <div className='banner vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-white'>
          <div className='banner__text mx-3 text-center'>
            <h1>
              Say No to Racism, Say Yes to Peace, Voice for Education to All...
            </h1>
            <p>Please enter a URL to watch!</p>
            <p>
              See available channels by pressing <strong>Listing</strong>{' '}
              button...
            </p>
            <p>
              Due to lack of support for HLS playback in Phones, I am using
              third-party site to play the M3U8 URL on phones. Make sure to copy
              the URL of channel you would like to play and add in the page.
            </p>
          </div>
        </div>
      ) : (
        <>
          {isMobile() ? (
            <Frame iframe={iframe} />
          ) : (
            <ReactPlayer className='app' playing controls url={url} />
          )}
        </>
      )}
    </>
  );
};

export default Player;
