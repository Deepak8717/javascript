import React from 'react';
import { Form } from 'react-bootstrap';

const FormElement = ({
  label,
  required,
  id,
  name,
  type,
  handleChange,
  placeholder,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      {required ? (
        <Form.Control
          required
          id={id}
          name={name}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          size='sm'
        />
      ) : (
        <Form.Control
          id={id}
          name={name}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          size='sm'
        />
      )}
    </Form.Group>
  );
};

export default FormElement;
