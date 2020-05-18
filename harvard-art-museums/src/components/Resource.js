import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Meta from './Meta';
import Records from './Records';

const Resource = ({ actions }) => {
  const { content, resource } = actions;
  const { info, records } = content;
  const headingValues = [];
  for (const property in info) {
    const value = info[property];
    if (typeof value === 'string' && value.includes('http')) {
      // const page = value.split('=');
      // headingValues.push(page[2]);
      continue;
    }
    headingValues.push(info[property]);
  }
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Meta headingValues={headingValues} />
          <Records resource={resource} records={records} />
        </Col>
      </Row>
    </Container>
  );
};

export default Resource;
