import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

const User = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  const handleSettings = () => {
    setToggle(!toggle);
  };
  const handleDelete = (e, id, dispatch) =>
    dispatch({ type: 'DELETE_USER', payload: id });
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div>
            <div>{user.name}</div>
            <div>{user.phone}</div>
            <button onClick={handleSettings}>Settings</button>
            {toggle ? <div>These are my settings...</div> : null}
            <button onClick={(e) => handleDelete(e, user.id, dispatch)}>
              Delete
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
