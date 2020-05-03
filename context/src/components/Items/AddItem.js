import React, { useState } from 'react';

const AddItem = () => {
  const [addItem, setAddItem] = useState({ name: '', age: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddItem({ ...addItem, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter Name:</label>
        <input
          value={addItem.name}
          onChange={handleChange}
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
          value={addItem.age}
          onChange={handleChange}
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

export default AddItem;
