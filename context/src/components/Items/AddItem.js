import React, { useState } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import InputField from '../Layouts/InputField';

const AddItem = () => {
  const initialItemState = { name: '', age: '', error: null };
  const [addItem, setAddItem] = useState(initialItemState);
  const handleSubmit = (e, dispatch) => {
    e.preventDefault();
    const { name, age } = addItem;
    if (name.trim() === '' || age === '' || Number(age) === 0) {
      setAddItem({
        ...addItem,
        error: 'This field is required',
      });
      return;
    }
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
            <InputField
              placeholder="Enter Name"
              onChange={handleChange}
              name="name"
              value={addItem.name}
              error={addItem.error}
            />
            <InputField
              placeholder="Enter Age"
              onChange={handleChange}
              name="age"
              value={addItem.age}
              type="number"
              error={addItem.error}
            />
            <button type="submit">Add</button>
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddItem;
