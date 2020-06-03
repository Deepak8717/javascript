import './App.css';
// import React, { useState, useEffect } from 'react';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Restaurants from './components/Restaurants/Restaurants';

const App = () => {
  // const [data, setData] = useState({
  //   content: null,
  //   error: false,
  //   loading: false,
  //   city: '',
  //   filter: '',
  // });
  // const getRestaurants = (city) => {
  //   setData({ ...data, loading: true });
  //   (async () => {
  //     const req = await fetch(
  //       `http://opentable.herokuapp.com/api/restaurants?city=${city}`
  //     );
  //     const json = await req.json();
  //     return json;
  //   })()
  //     .then((d) => setData({ ...data, content: d }))
  //     .catch(() => setData({ ...data, error: true }));
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const city = e.target.elements['city'].value;
  //   if (city.trim() !== '') {
  //     getRestaurants(city);
  //     e.target.reset();
  //   }
  // };
  const restaurants = [
    { id: 1, text: 'A', isClosed: false },
    { id: 2, text: 'B', isClosed: false },
  ];
  return (
    <Restaurants
      restaurants={restaurants}
      //handleChange={handleChange}
      //handleSubmit={handleSubmit}
    />
  );
};

export default hot(App);
