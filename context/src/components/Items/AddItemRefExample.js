import React, { useRef } from 'react';

const AddItem = ({ name, age }) => {
  const itemName = useRef();
  const itemAge = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const addItem = {
      name: itemName.current.value,
      age: itemAge.current.value,
    };
    console.log(addItem);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter Name:</label>
        <input
          ref={itemName}
          defaultValue={name}
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <label htmlFor="age">Enter Age:</label>
        <input
          ref={itemAge}
          defaultValue={age}
          id="age"
          type="number"
          name="age"
          placeholder="Age"
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

AddItem.defaultProps = {
  name: 'John',
  age: 21,
};

export default AddItem;
