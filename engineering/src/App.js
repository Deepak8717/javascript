import './App.css';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Restaurants from './components/Restaurants/Restaurants';

const App = () => {
  const restaurants = [];
  return <Restaurants restaurants={restaurants} />;
};

export default hot(App);
