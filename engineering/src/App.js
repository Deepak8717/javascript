import './App.css';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Restaurants from './components/Restaurants/Restaurants';

const App = () => {
  return <Restaurants />;
};

export default hot(App);
