import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className='d-flex py-3'>
              <a
                href='https://www.youtube.com/results?search_query=brad+traversy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-decoration-none text-white'
              >
                Brad Traversy
              </a>
              <a
                href='https://multiple.js.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='ml-3 text-decoration-none text-white'
              >
                Multiply.js
              </a>
              <span className='ml-3 text-muted'>Peace!</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
