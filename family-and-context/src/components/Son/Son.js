import React, { useContext } from 'react';
import AppContext from '../AppContext/AppContext';

const Son = () => {
  const { message, push, handleClick } = useContext(AppContext);
  return (
    <div>
      <h2>Son</h2>
      {push ? <p>{message}</p> : null}
      {!push ? (
        <button onClick={handleClick}>Push Son</button>
      ) : (
        <button onClick={handleClick}>Apologize</button>
      )}
    </div>
  );
};

export default Son;
