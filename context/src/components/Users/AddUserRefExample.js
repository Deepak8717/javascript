import React, { useRef } from 'react';

const AddUser = ({ name, phone }) => {
  const userName = useRef();
  const userPhone = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const addUser = {
      name: userName.current.value,
      phone: userPhone.current.value,
    };
    console.log(addUser);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter Name:</label>
        <input
          ref={userName}
          defaultValue={name}
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Enter Phone:</label>
        <input
          ref={userPhone}
          defaultValue={phone}
          id="phone"
          type="number"
          name="phone"
          placeholder="phone"
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

AddUser.defaultProps = {
  name: 'John',
  phone: 21,
};

export default AddUser;
