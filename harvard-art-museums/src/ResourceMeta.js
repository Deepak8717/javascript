import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';

const ResourceMeta = ({ actions }) => {
  const { content } = actions;
  const { info } = content;
  const headingKeys = [];
  const headingValues = [];
  for (const property in info) {
    headingKeys.push(property);
  }
  for (const property in info) {
    const value = info[property];
    if (typeof value === 'string' && value.includes('http')) {
      const page = value.split('=');
      headingValues.push(page[2]);
      continue;
    }
    headingValues.push(info[property]);
  }
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Table>
            <thead>
              <tr>
                {headingKeys.map((i, index) => (
                  <th key={index}>{i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {headingValues.map((i, index) => (
                  <th key={index}>{i}</th>
                ))}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ResourceMeta;
