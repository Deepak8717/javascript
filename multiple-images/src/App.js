import './App.scss';
import React, { useState } from 'react';
import Board from './Board';
import Settings from './Settings';
import Menu from './Menu';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState({ boxes: null, sourceCode: null });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const sourceCode = [...Array(Number(data.boxes))]
      .map((j, i) => {
        const position = e.target.elements[`box-${i}-position`].value;
        const url = e.target.elements[`box-${i}-bg`].value;
        return `<div class='box bg-light' ${
          position && url
            ? `style="grid-column:${position};background-image:url(${url})"`
            : position
            ? `style="grid-column:${position}"`
            : url
            ? `style="background-image:url(${url})"`
            : ''
        }>${i}</div>`;
      })
      .join('');
    setData({ ...data, sourceCode });
  };
  return (
    <div style={{ paddingTop: '3.5rem' }}>
      <Menu />
      <Container fluid className='my-3' style={{ minHeight: '100vh' }}>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Settings
              data={data}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Col>
          <Col xs={12} md={8}>
            <Board data={data} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
