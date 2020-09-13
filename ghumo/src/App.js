import React from 'react';
import ReactPlayer from 'react-player';

const App = () => {
  return (
    <>
      <ReactPlayer
        url='https://youtu.be/72OLa2NRbvU'
        playing={true}
        width='100vw'
        height='100vh'
      />
    </>
  );
};

export default App;
