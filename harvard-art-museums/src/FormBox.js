import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FormBox = ({ actions, handleChange, handleSubmit }) => {
  const { resource } = actions;
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Select a Resource</Form.Label>
              <Form.Control
                as='select'
                name='resource'
                value={resource}
                onChange={handleChange}
              >
                <option value={null}>Select a Resource</option>
                <option value='object'>Object</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Button variant='primary' type='submit'>
                Proceed
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormBox;
