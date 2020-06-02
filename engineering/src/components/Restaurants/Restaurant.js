import React from 'react';

const Restaurant = ({ restaurant }) => {
  const {
    address,
    area,
    city,
    country,
    name,
    phone,
    postal_code,
    price,
    state,
  } = restaurant;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Area: {area}</div>
      <div>
        Address: {address}, {city}, {state}, {country}, {postal_code}
      </div>
      <div>
        Phone: {phone}, {city}, {state}, {country}
      </div>
      <div>
        Price:{' '}
        {price === 4
          ? 'Expensive'
          : price === 3
          ? 'Moderate'
          : price === 2
          ? 'Affordable'
          : 'Cheaper'}
      </div>
    </div>
  );
};

export default Restaurant;
