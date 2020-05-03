import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Provider from './Context';
import Users from './components/Users/Users';
import AddUser from './components/Users/AddUser';
import Menu from './components/Layouts/Menu';
import About from './components/Pages/About';
import None from './components/Pages/None';

const App = () => {
  return (
    <Provider>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/user/add" component={AddUser} exact />
          <Route path="/about" component={About} exact />
          <Route component={None} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
