import React, { useState } from 'react';
import { Consumer } from '../../Context';
import InputField from '../Layouts/InputField';
import axios from 'axios';

const AddUser = ({ history }) => {
  const initialUserState = { name: '', phone: '', error: null };
  const [addUser, setAddUser] = useState(initialUserState);
  const handleSubmit = async (e, dispatch) => {
    e.preventDefault();
    const { name, phone } = addUser;
    if (name.trim() === '' || phone === '' || Number(phone) === 0) {
      setAddUser({
        ...addUser,
        error: 'This field is required',
      });
      return;
    }
    const newUser = {
      name,
      phone,
    };
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/users/`,
      newUser
    );
    dispatch({ type: 'ADD_USER', payload: response.data });
    setAddUser(initialUserState);
    history.push('/');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddUser({ ...addUser, [name]: value });
  };
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <form onSubmit={(e) => handleSubmit(e, dispatch)}>
            <InputField
              placeholder="Enter Name"
              onChange={handleChange}
              name="name"
              value={addUser.name}
              error={addUser.error}
            />
            <InputField
              placeholder="Enter Phone"
              onChange={handleChange}
              name="phone"
              value={addUser.phone}
              type="number"
              error={addUser.error}
            />
            <button type="submit">Add</button>
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddUser;
