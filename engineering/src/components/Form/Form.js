import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRestaurants } from '../Restaurants/selectors';
import { filterRestaurants } from '../Restaurants/actions';

const Form = ({ startLoadingRestaurants, onFilterChanged }) => {
  const [fields, setFields] = useState({ city: '', filter: '' });
  const { city, filter } = fields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    startLoadingRestaurants(city);
  };
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
          onChange={(e) => {
            setFields({ ...fields, filter: e.target.value });
            onFilterChanged(e.target.value);
          }}
        />
      </div>
      <button type='submit'>Search</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  restaurants: getRestaurants(state),
});
const mapDispatchToProps = (dispatch) => ({
  onFilterChanged: (text) => dispatch(filterRestaurants(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
