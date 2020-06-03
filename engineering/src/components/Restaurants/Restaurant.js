import React from 'react';

const Restaurant = ({ restaurant }) => {
  const { address, area, name, price } = restaurant;
  return (
    <div className='card__item'>
      <h3>{name}</h3>
      <h4>
        Price: <strong>{price}</strong>
      </h4>
      <div>
        <em>{address}</em>
      </div>
      <div>{area}</div>
    </div>
  );
};

export default Restaurant;
