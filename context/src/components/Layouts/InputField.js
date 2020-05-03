import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ type, name, value, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{placeholder}:</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
