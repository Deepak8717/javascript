import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ url }) => {
  return (
    <>
      {url === null ? (
        <div className='bg-black vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-white'>
          <div className='mx-3 text-center'>
            <p>Please enter a URL to watch!</p>
            <p>
              See available channels by pressing <strong>Listing</strong>{' '}
              button...
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
