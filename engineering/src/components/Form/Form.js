import React, { useState } from 'react';
import { connect } from 'react-redux';

const Form = () => {
  const [fields, setFields] = useState({ city: '', filter: '' });
  const { city, filter } = fields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={handleChange}
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
  onCreatePressed: (text) => dispatch(addRestaurant(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
