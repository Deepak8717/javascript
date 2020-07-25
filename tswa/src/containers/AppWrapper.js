import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilmsBox from '../components/FilmsBox';
import LastMovieBox from '../components/LastMovieBox';
import SelectBox from '../components/SelectBox';

const AppWrapper = () => {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <Container>
        <Row>
          <Col xs={{ offset: 4, span: 4 }}>
            <SelectBox />
          </Col>
        </Row>
        <Row>
          <Col>
            <FilmsBox />
          </Col>
        </Row>
        <Row>
          <Col>
            <LastMovieBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppWrapper;
