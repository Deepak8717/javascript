import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Harvard Art Museum</h1>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
