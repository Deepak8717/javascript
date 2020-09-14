import React, { useContext } from 'react';
import AppContext from '../AppContext/AppContext';

const Father = () => {
  const { message, push, handleClick } = useContext(AppContext);
  return (
    <div>
      <h2>Father</h2>
      {push ? <p>{message}</p> : null}
      {!push ? (
        <button onClick={handleClick}>Push Father</button>
      ) : (
        <button onClick={handleClick}>Apologize</button>
      )}
    </div>
  );
};

export default Father;
