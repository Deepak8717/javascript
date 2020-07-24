import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FilmsBox from '../components/FilmsBox';
import LastMovieBox from '../components/LastMovieBox';
import SelectBox from '../components/SelectBox';

const AppWrapper = ({ data, setData, handleChange }) => {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <Container>
        <Row>
          <Col xs={{ offset: 4, span: 4 }}>
            <SelectBox
              data={data}
              setData={setData}
              handleChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FilmsBox data={data} setData={setData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <LastMovieBox data={data} setData={setData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

AppWrapper.defaultProps = {
  data: {},
  handleChange: () => {},
  setData: () => {},
};

AppWrapper.propTypes = {
  data: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  setData: PropTypes.func,
};

export default AppWrapper;
