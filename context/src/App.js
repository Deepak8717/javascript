import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Provider from './Context';
import Menu from './components/Layouts/Menu';
import AddItem from './components/Items/AddItem';
import Items from './components/Items/Items';
import About from './components/Pages/About';
import None from './components/Pages/None';

const App = () => {
  return (
    <Provider>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" component={Items} exact />
          <Route path="/item/add" component={AddItem} exact />
          <Route path="/about" component={About} exact />
          <Route component={None} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
