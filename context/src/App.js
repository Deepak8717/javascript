import React from 'react';
import Provider from './Context';
import Menu from './components/Menu';
import Items from './components/Items';

const App = () => {
  return (
    <Provider>
      <Menu />
      <Items />
    </Provider>
  );
};

export default App;
