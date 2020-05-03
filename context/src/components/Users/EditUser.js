import React, { useState, useEffect } from 'react';
import { Consumer } from '../../Context';
import InputField from '../Layouts/InputField';
import axios from 'axios';

const EditUser = ({ history, match }) => {
  const initialUserState = { name: '', phone: '', error: null };
  const [editUser, setEditUser] = useState(initialUserState);
  const handleSubmit = async (e, dispatch) => {
    e.preventDefault();
    const { name, phone } = editUser;
    if (name.trim() === '' || phone === '' || Number(phone) === 0) {
      setEditUser({
        ...editUser,
        error: 'This field is required',
      });
      return;
    }
    const updateContact = {
      name,
      phone,
    };
    const { id } = match.params;
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );
    dispatch({ type: 'EDIT_USER', payload: response.data });
    setEditUser(initialUserState);
    history.push('/');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };
  useEffect(() => {
    const { id } = match.params;
    (async () => {
      const request = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return request.data;
    })()
      .then((resp) => {
        console.log(resp);
        const { name, phone } = resp;
        setEditUser({ ...editUser, name, phone });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
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
              value={editUser.name}
              error={editUser.error}
            />
            <InputField
              placeholder="Enter Phone"
              onChange={handleChange}
              name="phone"
              value={editUser.phone}
              type="phone"
              error={editUser.error}
            />
            <button type="submit">Edit</button>
          </form>
        );
      }}
    </Consumer>
  );
};

export default EditUser;
