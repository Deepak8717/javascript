import './InputField.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputField = ({ type, name, value, placeholder, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name}>{placeholder}:</label>
      <input
        value={value}
        className={classnames({
          error: error,
        })}
        onChange={onChange}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
      {error && <small>{error}</small>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
