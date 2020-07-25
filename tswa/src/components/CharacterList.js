import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loading from '../containers/Loading';

const CharacterList = () => {
    const onSelected = () => {};
    const characters = useSelector(state => state.characters);
    const loading = useSelector(state => state.loading);
    
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
                <Form.Control as='select' custom onChange={onSelected}>
                    {defaultOption}
                    {optionsList}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default CharacterList;
