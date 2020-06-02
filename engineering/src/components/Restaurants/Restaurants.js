import React from 'react';
import Form from '../Form/Form';
import Restaurant from './Restaurant';

const Restaurants = ({ data, handleChange, handleSubmit }) => {
  const { content } = data;
  return (
    <>
      <Form
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {content === null
        ? 'Please type a city to find restaurants near you.'
        : content.restaurants.map((i) => (
            <Restaurant key={i.id} restaurant={i} />
          ))}
    </>
  );
};

export default Restaurants;
