import React, { useState } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import InputField from '../Layouts/InputField';

const AddUser = ({ history }) => {
  const initialUserState = { name: '', phone: '', error: null };
  const [addUser, setAddUser] = useState(initialUserState);
  const handleSubmit = (e, dispatch) => {
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
      id: uuidv4(),
      name,
      phone,
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
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
