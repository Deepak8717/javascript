import React from 'react';
import { Row, Col } from 'react-bootstrap';

const createMarkup = (markup) => {
  return { __html: markup };
};

const Board = ({ data }) => {
  const { sourceCode, columns, height } = data;
  return (
    <Row>
      <Col xs={12}>
        <main
          style={{ gridTemplateColumns: columns, height }}
          dangerouslySetInnerHTML={createMarkup(sourceCode)}
        />
      </Col>
    </Row>
  );
};

export default Board;
