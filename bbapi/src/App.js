import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Grid from './components/Grid';
import Search from './components/Search';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';

const App = () => {
  const initialData = {
    items: [],
    query: '',
    loading: true,
    error: false,
  };
  const [data, setData] = useState(initialData);
  const { query, loading, error } = data;
  const BASE_URL = `https://www.breakingbadapi.com/api/characters?name=${query}`;
  useEffect(() => {
    (async () => {
      const response = await axios(BASE_URL);
      return response.data;
    })()
      .then((result) => setData({ ...data, items: result, loading: false }))
      .catch(() => setData({ ...data, error: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  if (error) return <ErrorMessage />;
  if (loading) return <Loading />;
  return (
    <Container>
      <Row>
        <Col>
          <div className='my-3'>
            <Header />
            <Search data={data} setData={setData} />
            <Grid data={data} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
