import React from 'react';
import Item from './Item';
import { Consumer } from '../../Context';

const Items = () => {
  return (
    <Consumer>
      {(value) => {
        const { items } = value;
        if (!items || items.length === 0) return <>No data present.</>;
        return (
          <>
            {items.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </>
        );
      }}
    </Consumer>
  );
};

export default Items;
