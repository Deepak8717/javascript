import React from 'react';
import ItemWithoutChildren from './ItemWithoutChildren';

const Item = ({ index, source, title }) => {
  return <ItemWithoutChildren index={index} source={source} title={title} />;
};

export default Item;
