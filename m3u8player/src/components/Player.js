import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ url }) => {
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
              Streams are compatible in Browsers running on Desktop/Laptop
              environments. I am trying my best to figure out how to make
              streams run on Phones.
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
