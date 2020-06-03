import React from 'react';
import { restaurants } from './reducers';

const Restaurant = ({ restaurant, onRemovePressed, onClosedPressed }) => {
  //const { address, area, name, price } = restaurant;
  const { text, isClosed } = restaurant;
  return (
    <div>
      {text}
      {isClosed ? null : (
        <button onClick={() => onClosedPressed(text)}>Close</button>
      )}
      <button onClick={() => onRemovePressed(text)}>Delete</button>
    </div>
  );
  // return (
  //   <div>
  //     <div>Name: {name}</div>
  //     <div>Area: {area}</div>
  //     <div>Address: {address}</div>
  //     <div>
  //       Price:{' '}
  //       {price === 4
  //         ? 'Expensive'
  //         : price === 3
  //         ? 'Moderate'
  //         : price === 2
  //         ? 'Affordable'
  //         : 'Cheaper'}
  //     </div>
  //   </div>
  // );
};

export default Restaurant;
