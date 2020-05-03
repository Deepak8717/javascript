import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = ({ user, params }) => {
  const [toggle, setToggle] = useState(false);
  const handleSettings = () => {
    setToggle(!toggle);
  };
  const handleDelete = async (e, id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_USER', payload: id });
  };
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
            <Link to={`/user/edit/${user.id}`}>Edit</Link>
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
