import React from 'react';
import { connect } from 'react-redux';
import { filterRestaurants } from '../Restaurants/actions';

const Form = ({
  data,
  handleChange,
  handleSubmit,
  //restaurants,
  onFilterChanged,
}) => {
  const { city } = data;
  const handleFilterChange = (e) => {
    const { value } = e.target;
    onFilterChanged(value);
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
          //value={filter}
          onChange={(e) => handleFilterChange(e)}
          //onChange={handleChange}
        />
      </div>
      <button type='submit'>Search</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});
const mapDispatchToProps = (dispatch) => ({
  onFilterChanged: (text) => dispatch(filterRestaurants(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
