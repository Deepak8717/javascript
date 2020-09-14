import React, { useContext } from 'react';
import AppContext from '../AppContext/AppContext';

const GrandFather = () => {
  const { message, push, handleClick } = useContext(AppContext);
  return (
    <div>
      <h2>Grand Father</h2>
      {push ? <p>{message}</p> : null}
      {!push ? (
        <button onClick={handleClick}>Push Grand Father</button>
      ) : (
        <button onClick={handleClick}>Apologize</button>
      )}
    </div>
  );
};

export default GrandFather;
