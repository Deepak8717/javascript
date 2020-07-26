/* eslint-disable react/prop-types */

import React from 'react';
import { Form } from 'react-bootstrap';

const SelectBox = ({ currentCharacterId, characters, onCharacterSelected }) => {
  return (
    <Form>
      <Form.Group controlId='character'>
        <Form.Label className='text-center w-100'>
          See&nbsp;
          <strong>Films</strong>
          {' '}
          of featured Character:
        </Form.Label>
        <Form.Control
          as='select'
          value={currentCharacterId}
          custom
          onChange={(e) => onCharacterSelected(e.target.value)}
        >
          <option value=''>Select a Character</option>
          {characters.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SelectBox;
