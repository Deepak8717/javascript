import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Settings = ({ data, handleSubmit, handleChange }) => {
  return (
    <Row>
      <Col xs={12}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={4}>
              <Form.Group>
                <Form.Label>Enter number of Boxes</Form.Label>
                <Form.Control
                  id='boxes'
                  name='boxes'
                  required
                  min='1'
                  type='number'
                  onChange={handleChange}
                  placeholder='5'
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label>Enter number of Columns</Form.Label>
                <Form.Control
                  id='columns'
                  name='columns'
                  required
                  type='text'
                  onChange={handleChange}
                  placeholder='repeat(2, minmax(0, 1fr))'
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label>Enter height for Boxes</Form.Label>
                <Form.Control
                  id='height'
                  name='height'
                  required
                  type='text'
                  onChange={handleChange}
                  placeholder='20rem'
                />
              </Form.Group>
            </Col>
          </Row>
          {data.boxes && Number(data.boxes) >= 1 && (
            <>
              {[...Array(Number(data.boxes))].map((e, i) => (
                <Row key={i}>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>
                        Enter Box {i} position <small>(grid position)</small>
                      </Form.Label>
                      <Form.Control
                        id={`box-${i}-position`}
                        name={`box-${i}-position`}
                        type='text'
                        onChange={handleChange}
                        placeholder='1/2'
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>
                        Enter Box {i} background <small>(image source)</small>
                      </Form.Label>
                      <Form.Control
                        id={`box-${i}-bg`}
                        name={`box-${i}-bg`}
                        type='url'
                        onChange={handleChange}
                        placeholder='https://www.placekitten.com/800/800'
                      />
                    </Form.Group>
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
      </Col>
    </Row>
  );
};

export default Settings;
