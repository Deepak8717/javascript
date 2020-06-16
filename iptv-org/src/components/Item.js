import React from 'react';
import ItemWithoutChildren from './ItemWithoutChildren';

const Item = ({ index, source, title, settings, setSettings }) => {
  return (
    <ItemWithoutChildren
      index={index}
      source={source}
      title={title}
      settings={settings}
      setSettings={setSettings}
    />
  );
};

export default Item;
