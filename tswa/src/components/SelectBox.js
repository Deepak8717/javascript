import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SelectBox = ({ data, handleChange }) => {
  const { characters } = data;
  const defaultOption = <option value=''>Select a Character</option>;
  const optionsList = characters.map((i, index) => {
    return (
      <option key={i.created} value={index}>
        {i.name}
      </option>
    );
  });
  return (
    <Form>
      <Form.Group controlId='character'>
        <Form.Label className='text-center w-100'>
          See&nbsp;
          <strong>Films</strong>
          {' '}
          of featured Character:
        </Form.Label>
        <Form.Control as='select' custom onChange={handleChange}>
          {defaultOption}
          {optionsList}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

SelectBox.defaultProps = {
  data: {},
  handleChange: () => {},
};

SelectBox.propTypes = {
  data: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
};

export default SelectBox;
