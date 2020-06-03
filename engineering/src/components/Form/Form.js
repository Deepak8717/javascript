import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  addRestaurant,
  // getRestaurants,
  // filterRestaurants,
} from '../Restaurants/actions';
//import { hello } from '../Restaurants/thunks';

const Form = ({
  restaurants,
  onCreatePressed,
  // onFormSubmit,
  // onFilterChanged,
  // handleChange,
  // handleSubmit,
  //onDisplayAlert,
}) => {
  // const { city } = data;
  // const handleFilterChange = (e) => {
  //   const { value } = e.target;
  //   onFilterChanged(value);
  // };
  const [fields, setFields] = useState({ city: '', filter: '' });
  const { city, filter } = fields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(city);
  };
  // useEffect(() => {
  //   onFilterChanged(filter);
  // }, [filter]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          placeholder='Enter City'
          name='city'
          value={city}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          placeholder='Filter i.e. Name, Address, Area'
          name='filter'
          value={filter}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={() => {
          const hasDuplicates = restaurants.some((i) => i.text === city);
          if (!hasDuplicates) {
            onCreatePressed(city);
          }
        }}
      >
        Add
      </button>
      <button type='submit'>Search</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addRestaurant(text)),
  // onFormSubmit: (text) => dispatch(getRestaurants(text)),
  // onFilterChanged: (text) => dispatch(filterRestaurants(text)),
  //onDisplayAlert: () => dispatch(hello()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
