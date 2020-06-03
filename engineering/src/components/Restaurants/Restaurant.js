import React from 'react';

const Restaurant = ({ restaurant }) => {
  const { address, area, name, price } = restaurant;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Area: {area}</div>
      <div>Address: {address}</div>
      <div>Price: {price}</div>
    </div>
  );
};

export default Restaurant;
