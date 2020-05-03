import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';

const Item = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  const handleSettings = () => {
    setToggle(!toggle);
  };
  const handleDelete = (e, id, dispatch) =>
    dispatch({ type: 'DELETE_ITEM', payload: id });
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <button onClick={handleSettings}>Settings</button>
            {toggle ? <div>These are my settings...</div> : null}
            <button onClick={(e) => handleDelete(e, item.id, dispatch)}>
              Delete
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
