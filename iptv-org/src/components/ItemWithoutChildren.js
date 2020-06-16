import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import staticActions from './staticActions';

const ItemWithoutChildren = ({ index, source, title }) => {
  const createMarkup = (source) => ({ __html: source });
  staticActions();
  return (
    <Card bg='dark' text='light'>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={index}
        className='text-capitalize'
      >
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <div dangerouslySetInnerHTML={createMarkup(source)} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemWithoutChildren;
