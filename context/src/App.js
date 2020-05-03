import React from 'react';
import Provider from './Context';
import Menu from './components/Layouts/Menu';
import AddItem from './components/Items/AddItem';
import Items from './components/Items/Items';

const App = () => {
  return (
    <Provider>
      <Menu />
      <AddItem />
      <Items />
    </Provider>
  );
};

export default App;
