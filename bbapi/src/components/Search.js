import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Search = ({ data, setData }) => {
  const { query } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <Form.Control
      className='my-3'
      type='text'
      autoFocus
      name='query'
      value={query}
      placeholder='Search a Character...'
      onChange={handleChange}
    />
  );
};

Search.defaultProps = {
  data: {},
  setData: () => {},
};

Search.propTypes = {
  data: PropTypes.instanceOf(Object),
  setData: PropTypes.func,
};

export default Search;
