import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  const handleSettings = () => {
    setToggle(!toggle);
  };
  // const handleDelete = (e, id) => {
  //   setData({ ...data, items: data.items.filter((item) => item.id !== id) });
  // };
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.age}</div>
      <button onClick={handleSettings}>Settings</button>
      {toggle ? <div>These are my settings...</div> : null}
      {/* <button onClick={(e) => handleDelete(e, item.id)}>Delete</button> */}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
