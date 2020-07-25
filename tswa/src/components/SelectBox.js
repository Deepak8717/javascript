import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startFetchCharacter } from '../store/actions';
import Loading from '../containers/Loading';

const SelectBox = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.characters);
  const loading = useSelector(state => state.characters.loading);
  const defaultOption = <option value=''>Select a Character</option>;
  const optionsList = characters.map((i, index) => {
    return (
      <option key={i.created} value={index} data-title={i.name}>
        {i.name}
      </option>
    );
  });
  if (loading) {
    return <Loading/>;
  } 
  return (
    <Form>
      <Form.Group controlId='character'>
        <Form.Label className='text-center w-100'>
          See&nbsp;
          <strong>Films</strong>
          {' '}
          of featured Character:
        </Form.Label>
        <Form.Control as='select' custom onChange={(e) => {
            const index = e.target.value;
            const name = e.target[e.target.selectedIndex].getAttribute('data-title');
            return dispatch(startFetchCharacter(index, name))
          }}>
          {defaultOption}
          {optionsList}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SelectBox;
