import React, { useState } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';

const AddItem = () => {
  const initialItemState = { name: '', age: '' };
  const [addItem, setAddItem] = useState(initialItemState);
  const handleSubmit = (e, dispatch) => {
    e.preventDefault();
    const { name, age } = addItem;
    const newItem = {
      id: uuidv4(),
      name,
      age,
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setAddItem(initialItemState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddItem({ ...addItem, [name]: value });
  };
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <form onSubmit={(e) => handleSubmit(e, dispatch)}>
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
      }}
    </Consumer>
  );
};

export default AddItem;
