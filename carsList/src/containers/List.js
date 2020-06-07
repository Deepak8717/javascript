import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from '../components/Item';

const List = () => {
  const [content, setContent] = useState({
    data: [],
    loading: false,
    error: false,
  });
  const { data, loading, error } = content;
  useEffect(() => {
    setContent({ ...data, loading: true });
    (async () => {
      const cars = await fetch('../public/Data.json');
      const carsJSON = await cars.json();
      return carsJSON;
    })()
      .then((d) => setContent({ ...data, data: d, loading: false }))
      .catch((e) => {
        console.log(e);
        setContent({ ...data, error: true });
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <>
      <h1 className='my-3'>Cars List</h1>
      <Row>
        {data.map((car) => (
          <Col key={car.id} xs={12} sm={6} md={4}>
            <Item car={car} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default List;
