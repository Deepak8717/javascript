import React from 'react';
import FormElement from './FormElement';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Settings = ({ data, handleSubmit, handleChange }) => {
  const { boxes } = data;
  const boxesArray = [...Array(Number(boxes))];
  const condition = boxes && Number(boxes) >= 1;
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={4}>
          <FormElement
            required={true}
            label='Total Boxes'
            id='boxes'
            name='boxes'
            type='number'
            handleChange={handleChange}
            placeholder='5'
            size='sm'
          />
        </Col>
        <Col xs={4}>
          <FormElement
            required={true}
            label='Grid Columns'
            id='columns'
            name='columns'
            type='text'
            handleChange={handleChange}
            placeholder='repeat(2, minmax(0, 1fr))'
          />
        </Col>
        <Col xs={4}>
          <FormElement
            required={true}
            label='Box Heights'
            id='height'
            name='height'
            type='text'
            handleChange={handleChange}
            placeholder='20rem'
          />
        </Col>
      </Row>
      {condition && (
        <>
          {boxesArray.map((e, i) => (
            <Row key={i}>
              <Col xs={6}>
                <FormElement
                  label={`Box ${i + 1}: Grid Position`}
                  id={`box-${i}-position`}
                  name={`box-${i}-position`}
                  type='text'
                  handleChange={handleChange}
                  placeholder='1/2'
                />
              </Col>
              <Col xs={6}>
                <FormElement
                  label={`Box ${i + 1}: Background`}
                  id={`box-${i}-bg`}
                  name={`box-${i}-bg`}
                  type='url'
                  handleChange={handleChange}
                  placeholder='https://www.placekitten.com/800/800'
                />
              </Col>
            </Row>
          ))}
        </>
      )}
      <Row>
        <Col xs={12}>
          <Form.Group>
            <Button variant='primary' type='submit'>
              Render Grid
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Settings;
