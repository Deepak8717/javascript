import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Message = ({ message }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p>{message}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Message;
