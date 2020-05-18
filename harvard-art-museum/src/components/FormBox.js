import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from 'react-bootstrap';

const FormBox = ({
  actions,
  handleChange,
  handleSubmit,
  handleNext,
  handlePrevious,
}) => {
  const { resource, page } = actions;
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
                <option value='image'>Image</option>
                <option value='object'>Object</option>
                <option value='person'>Person</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <ButtonGroup>
                {/* <Button variant='primary' type='submit'>
                  Proceed
                </Button> */}
                <Button variant='secondary' onClick={handleNext}>
                  Next
                </Button>
                {page > 1 && (
                  <Button variant='info' onClick={handlePrevious}>
                    Previous
                  </Button>
                )}
              </ButtonGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormBox;
