import React from 'react';
import ReactPlayer from 'react-player';
import { FaListUl } from 'react-icons/fa';
import { BsArrowsFullscreen } from 'react-icons/bs';

const Player = ({ url }) => {
  return (
    <>
      {url === null ? (
        <div className='banner vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-white'>
          <div className='banner__text mx-3 text-center w-75'>
            <h1 className='m-0 mb-3'>
              We've come a long way, <strong>IPTV</strong> for Web is here!
            </h1>
            <p>
              Enter M3U8 URL <em className='mx-1'>or</em> See available channels
              by pressing{' '}
              <span className='mx-1'>
                <FaListUl />
              </span>{' '}
              button
            </p>
            <p>
              Watch TV channel in theatre mode by pressing{' '}
              <span className='mx-1'>
                <BsArrowsFullscreen />
              </span>{' '}
              button
            </p>
            <p>
              If you are using a phone, Copy channel link and{' '}
              <a
                href='https://www.hlsplayer.net/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <strong>open</strong>
              </a>{' '}
              this application to play the stream because <strong>HLS</strong>{' '}
              stream is not supported on mobile devices.
            </p>
          </div>
        </div>
      ) : (
        <ReactPlayer className='app' playing controls url={url} />
      )}
    </>
  );
};

export default Player;
