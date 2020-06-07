import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Item = ({ car }) => {
  const { title, distributor, amount, year, ranking, image } = car;
  return (
    <Card className='mb-3'>
      <Card.Img variant='top' src={image} alt={title} />
      <Card.Body>
        <Card.Text>
          <strong>Title:</strong> {title}
        </Card.Text>
        <Card.Text>
          <strong>Distributor:</strong> {distributor}
        </Card.Text>
        <Card.Text>
          <strong>Year:</strong> {year}
        </Card.Text>
        <Card.Text>
          <strong>Ranking:</strong> {ranking}
        </Card.Text>
        <Card.Text>
          <strong>Distributor:</strong> ${amount}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Item.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    amount: PropTypes.number,
    year: PropTypes.number,
    ranking: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default Item;
