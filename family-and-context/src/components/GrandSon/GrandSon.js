import React, { useContext } from 'react';
import AppContext from '../AppContext/AppContext';

const GrandSon = () => {
  const { message, push, handleClick } = useContext(AppContext);
  return (
    <div>
      <h2>Grand Son</h2>
      {push ? <p>{message}</p> : null}
      {!push ? (
        <button onClick={handleClick}>Push Grand Son</button>
      ) : (
        <button onClick={handleClick}>Apologize</button>
      )}
    </div>
  );
};

export default GrandSon;
