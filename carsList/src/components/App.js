import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import List from '../containers/List';

const App = () => {
  return (
    <>
      <Navbar bg='light' expand='lg' fixed='top' className='shadow-lg'>
        <Container>
          <Navbar.Brand>Cars List</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ paddingTop: '3.5rem' }}>
        <Row>
          <Col xs={12}>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
