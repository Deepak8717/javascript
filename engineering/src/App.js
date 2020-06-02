import './App.css';
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Restaurants from './components/Restaurants/Restaurants';

const App = () => {
  const [data, setData] = useState({
    content: null,
    error: false,
    loading: false,
  });
  const getRestaurants = (city) => {
    setData({ ...data, loading: true });
    (async () => {
      const req = await fetch(
        `http://opentable.herokuapp.com/api/restaurants?city=${city}`
      );
      const json = await req.json();
      return json;
    })()
      .then((d) => setData({ ...data, content: d }))
      .catch(() => setData({ ...data, error: true }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements['city'].value;
    if (city.trim() !== '') {
      getRestaurants(city);
      e.target.reset();
    }
  };
  return <Restaurants data={data} handleSubmit={handleSubmit} />;
};

export default hot(App);
