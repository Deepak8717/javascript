import React from 'react';

const Restaurant = ({ restaurant }) => {
  const { address, area, name, price } = restaurant;
  return (
    <div>
      <div>{name}</div>
      <div>{area}</div>
      <div>{address}</div>
      <div>
        Price: <strong>{price}</strong>
      </div>
    </div>
  );
};

export default Restaurant;
