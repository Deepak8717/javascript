import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardColumns } from 'react-bootstrap';

const Grid = ({ data }) => {
  const { items, loading, error } = data;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const characters = items.map((item) => {
    const { char_id, name, img, status } = item;
    return (
      <Card key={char_id}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{status}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  const message = characters.length === 0 ? 'No characters found' : characters;
  return <CardColumns>{message}</CardColumns>;
};

Grid.defaultProps = {
  data: {},
};

Grid.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default Grid;
