import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCity } from '../Restaurants/selectors';
import { filterRestaurants } from '../Restaurants/actions';

const Form = ({ selectedCity, startLoadingRestaurants, onFilterChanged }) => {
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
  const handleReset = (e) => {
    e.preventDefault();
    localStorage.removeItem('persist:root');
    window.location.reload();
  };
  return (
    <form onSubmit={handleSubmit} role='search'>
      <div>
        <label htmlFor='city' aria-label='Enter City' className='sr-only'>
          Enter City
        </label>
        <input
          id='city'
          type='text'
          placeholder='Enter City'
          name='city'
          value={city}
          onChange={handleChange}
          required
          tabindex='0'
        />
        <label htmlFor='filter' aria-label='Enter Filter' className='sr-only'>
          Enter Filter
        </label>
        {selectedCity && selectedCity !== '' && (
          <input
            id='filter'
            type='text'
            placeholder='Filter i.e. Name, Address, Area'
            name='filter'
            value={filter}
            onChange={(e) => {
              setFields({ ...fields, filter: e.target.value });
              onFilterChanged(e.target.value);
            }}
            tabindex='0'
          />
        )}
      </div>
      <button tabindex='0' type='button' role='button' type='submit'>
        Search
      </button>
      <button tabindex='0' type='button' role='button' onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: getCity(state),
});
const mapDispatchToProps = (dispatch) => ({
  onFilterChanged: (text) => dispatch(filterRestaurants(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
