import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../containers/Loading';
import { startFetchCharacter } from '../store/actions'

const CharacterList = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.characters);
    const loading = useSelector(state => state.characters.loading);
    
    if (loading) {
        return <Loading/>;
    }

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
                <Form.Control as='select' custom onChange={(e) => dispatch(startFetchCharacter(e.target.value))}>
                    {defaultOption}
                    {optionsList}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default CharacterList;
